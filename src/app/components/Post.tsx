"use client"

import React from 'react'
import { deletePost, updatePost } from '@/actions/action'

 export function Post({post}:any) {
    // creating a new formdata from the post object recieved, use in the update post

    const formData = new FormData()
    formData.append("title",post.title)
    formData.append("body",post.body)
    const {title,body} = post
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <div className="buttonContainer space-x-5 my-5">
        <button className="delete w-auto h-auto py-2 px-5 rounded-md bg-black text-white shadow" onClick={()=>deletePost(post.id)}>del</button>
        <button className="update w-auto h-auto py-2 px-5 rounded-md bg-black text-white  shadow" onClick={()=>updatePost(post.id,formData)}>update</button>
      </div>
    </div>
  )
}


