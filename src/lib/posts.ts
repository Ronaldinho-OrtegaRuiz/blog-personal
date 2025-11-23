import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { Post, PostMetadata } from '@/types/post';

const postsDirectory = path.join(process.cwd(), 'src/data/posts');

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(content);
    
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt,
      content: contentHtml,
      category: data.category,
      tags: data.tags || [],
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<PostMetadata[]> {
  const slugs = getPostSlugs();
  const postsPromises = slugs.map(async (slug) => {
    const post = await getPostBySlug(slug);
    if (!post) return null;
    
    const metadata: PostMetadata = {
      slug: post.slug,
      title: post.title,
      date: post.date,
      category: post.category,
      tags: post.tags,
    };
    
    if (post.excerpt) {
      metadata.excerpt = post.excerpt;
    }
    
    return metadata;
  });

  const posts = await Promise.all(postsPromises);
  const validPosts = posts.filter((post): post is PostMetadata => post !== null);

  return validPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

