import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/PostList';

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2" style={{ color: '#880000' }}>Todos los Posts</h1>
        <p className="text-gray-600 text-sm">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} en total
        </p>
      </div>

      <PostList posts={posts} />
    </div>
  );
}

