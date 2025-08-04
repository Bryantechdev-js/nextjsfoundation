// app/post/[id]/page.tsx
import { prisma } from '@/app/lib/prisma'; // or your prisma location
// import { Post } from './PostComponent'; // rename your Post component file to PostComponent.tsx
import { notFound } from 'next/navigation';
import { PostProvider } from '@/app/context/PostContext';
import { Post } from '@/app/components/Post';
import { Suspense } from 'react';
import LoadingPost from '../loading';
interface params{
    params: { id: string }
}

export default async function Page({ params }:params) {
  const postId = await parseInt(params.id);
  if (isNaN(postId)) notFound();

  const post = await prisma.post.findUnique({
    where: { id: postId },
  });

  if (!post) notFound();

  return (
    <PostProvider>
      <Suspense>
        <Post post={post} />
      </Suspense>
    </PostProvider>
  );
}
