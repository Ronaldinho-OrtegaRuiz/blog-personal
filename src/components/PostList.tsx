import type { PostMetadata } from '@/types/post';
import PostCard from './PostCard';

interface PostListProps {
  posts: PostMetadata[];
}

export default function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="bg-white border border-black p-8 text-center">
        <p className="text-gray-600">No hay posts todavía. ¡Vuelve pronto!</p>
      </div>
    );
  }

  return (
    <div className="space-y-0">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

