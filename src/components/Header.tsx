'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isPostPage = pathname?.startsWith('/posts/') && pathname !== '/posts';
  const bgColor = isPostPage ? '#eef2ff' : '#FFFFEE';

  return (
    <header 
      className="border-b-2 border-black px-4" 
      style={{ 
        height: '133px',
        backgroundColor: bgColor,
        marginLeft: isPostPage ? 'calc(-50vw + 50%)' : '0',
        marginRight: isPostPage ? 'calc(-50vw + 50%)' : '0',
        width: isPostPage ? '100vw' : 'auto'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/RDNchan.png"
              alt="RNDchan Logo"
              width={200}
              height={133}
              className="h-auto"
              priority
            />
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/" className="text-black hover:underline">
              Inicio
            </Link>
            <Link href="/posts" className="text-black hover:underline">
              Posts
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

