import Link from 'next/link';
import type { PostMetadata } from '@/types/post';

interface PostCardProps {
  post: PostMetadata;
}

export default function PostCard({ post }: PostCardProps) {
  const date = new Date(post.date);
  const formattedDate = date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/posts/${post.slug}`} className="block">
      <article className="border border-black bg-white p-4 mb-3 hover:bg-[#F0E0D6] transition-colors cursor-pointer">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h2 className="text-base font-bold hover:underline mb-1" style={{ color: '#880000' }}>
              {post.title}
            </h2>
          </div>
          <span className="text-xs text-gray-600 ml-4 whitespace-nowrap">
            {formattedDate}
          </span>
        </div>
        
        {post.excerpt && (
          <p className="text-sm text-gray-700 mb-2 line-clamp-2">
            {post.excerpt}
          </p>
        )}
        
        <div className="flex items-center gap-2 text-xs text-gray-600">
          {post.category && (
            <span className="bg-[#F0E0D6] px-2 py-1 border border-gray-400">
              {post.category}
            </span>
          )}
          {post.tags && post.tags.length > 0 && (
            <span className="text-gray-500">
              {post.tags.map((tag, i) => (
                <span key={tag}>
                  #{tag}
                  {i < post.tags!.length - 1 && ', '}
                </span>
              ))}
            </span>
          )}
        </div>
      </article>
    </Link>
  );
}

