'use server';

import { prisma } from '@/app/lib/prisma';
// import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache'; // optional, if using caching

// CREATE post
export async function createPost(formData: FormData) {
    // creating a router to navigate amoung route/
    
  const title = formData.get('title') as string;
  const body = formData.get('body') as string;

  const respons =await prisma.post.create({
    data: { title, body },
  });

  if(respons){
    return true
  }

  revalidatePath('/post'); // Refresh UI if needed
}

// UPDATE post
export async function updatePost(id: number, formData: FormData) {
  const title = formData.get('title') as string;
  const body = formData.get('body') as string;

  await prisma.post.update({
    where: { id },
    data: { title, body },
  });

  revalidatePath(`/post/${id}`);
}

// DELETE post
export async function deletePost(id: number) {
  await prisma.post.delete({
    where: { id },
  });

  revalidatePath('/post');
}
