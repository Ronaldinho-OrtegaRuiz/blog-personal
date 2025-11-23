import type { Post } from '@/types/post';

interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  const date = new Date(post.date);
  const formattedDate = date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="border border-black p-6" style={{ backgroundColor: '#eef2ff' }}>
      <header className="mb-6 pb-4 border-b border-gray-400">
        <h1 className="text-2xl font-bold mb-2" style={{ color: '#880000' }}>{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>{formattedDate}</span>
          {post.category && (
            <span className="bg-[#F0E0D6] px-2 py-1 border border-gray-400">
              {post.category}
            </span>
          )}
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-2 text-sm text-gray-500">
            {post.tags.map((tag) => (
              <span key={tag} className="mr-2">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>
      
      <div 
        className="prose prose-sm max-w-none text-gray-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}

