import { getPostBySlug, getPostSlugs } from '@/lib/posts';
import PostDetail from '@/components/PostDetail';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div 
      className="bg-[#eef2ff] min-h-screen" 
      style={{ 
        marginLeft: 'calc(-50vw + 50%)', 
        marginRight: 'calc(-50vw + 50%)', 
        width: '100vw' 
      }}
    >
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="mb-4">
          <Link 
            href="/posts" 
            className="text-sm text-gray-600 hover:underline"
          >
            ← Volver a posts
          </Link>
        </div>
        <PostDetail post={post} />
      </div>
    </div>
  );
}

