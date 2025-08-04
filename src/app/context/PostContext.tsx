"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type PostType = {
  id?: number;
  title: string;
  body: string;
} | null;

type PostContextType = {
  posts: PostType;
  setPost: (posts: PostType) => void;
};

const PostContext = createContext<PostContextType | undefined>(undefined);

export function PostProvider({ children }: { children: ReactNode }) {
  const [posts, setPost] = useState<PostType>(null);
  return (
    <PostContext.Provider value={{ posts, setPost }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePostContext() {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within PostProvider");
  }
  return context;
}      
