"use client"

import { useRouter } from "next/navigation";
import { usePostContext } from "../context/PostContext";
import Link from "next/link";
import { deletePost } from "@/actions/action";
import readLoud from "../lib/ReadLoud";

export function Post({ post }: { post: any }) {
  if (!post) return <div>Loading or post not found.</div>;

  const { title, body, id } = post;

  // ✅ Move all hooks here
  const { posts, setPost } = usePostContext();
  const router = useRouter(); // ✅ VALID hook call

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);

    setPost(post);
    // or setPost(formData) if that's the design
    
    
    router.push("/create");
  };

  return (
    <div className="border rounded p-4 my-4 shadow h-screen">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700">{body}</p>
      <div className="buttonContainer space-x-5 my-5">
        <Link href="/post">
          <button
            className="delete py-2 px-5 rounded-md bg-red-600 text-white shadow"
            onClick={() => deletePost(id)}
          >
            Delete
          </button>
        </Link>

        <button
          className="update py-2 px-5 rounded-md bg-blue-600 text-white shadow"
          onClick={handleUpdate}
        >
          Update
        </button>

        <button
          onClick={() => readLoud(title, body)}
          className="bg-green-100 shadow w-auto h-auto px-8 py-3 rounded"
        >
          ReadLoud
        </button>
      </div>
    </div>
  );
}
