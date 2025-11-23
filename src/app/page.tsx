import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/PostList';

export default async function Home() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 10);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2" style={{ color: '#880000' }}>
          Bienvenido a /blog/
        </h1>
        <p className="text-gray-700">
          Un espacio para compartir pensamientos sobre tecnología, educación, aprendizaje y más.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-3" style={{ color: '#880000' }}>Posts Recientes</h2>
        <PostList posts={recentPosts} />
      </div>

      {posts.length > 10 && (
        <div className="mt-6 text-center">
          <Link 
            href="/posts" 
            className="inline-block bg-white border border-black px-4 py-2 hover:bg-[#F0E0D6] transition-colors"
          >
            Ver todos los posts
          </Link>
        </div>
      )}
    </div>
  );
}
