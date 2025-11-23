export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
  category?: string;
  tags?: string[];
}

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  category?: string;
  tags?: string[];
}

