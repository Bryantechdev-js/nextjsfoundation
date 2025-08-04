"use client"

import { createPost, updatePost } from '@/actions/action'
import { redirect, useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { usePostContext } from '../context/PostContext'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { authError } from '../errorClasses/authErrorFile'
import { updataPostError } from '../errorClasses/updataPostError'

function page() {
    
    try{
        const {isAuthenticated} =  getKindeServerSession()
        const isUserAuthenticated = isAuthenticated()
        // console.log(isAuthenticated);
        
        if(!isUserAuthenticated){
            throw new authError("User is not authenticated")
        }
    } catch (error) {
        console.error("Error checking authentication:", error)
        return redirect("/")
    }

    const [isLoaded, setIsLoaded] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { posts: post, setPost } = usePostContext();

    const [formData, setFormData] = useState({
        title: '',
        body: ''
    });

    // ✅ Auto-populate form when `post` is available (for update)
    useEffect(() => {
        if (post) {
            setFormData({
                title: post.title || '',
                body: post.body || ''
            });
        }
    }, [post]);

    const router = useRouter()
    // alert(post?.id ?? "undefine or null" )
    const creating = !post?.id 
    // ✅ Set initial form data for creating a new post
    try{
        if(creating ?? true) throw new updataPostError("cant update post check the post context and create post page")
        console.warn("it is creating post not updating:" + post?.id)
    }catch(err){
        console.log(err);
        
    }
    

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleForm = async (formDataClient: FormData) => {
        setIsSubmitting(true)
        try {
            if (creating) {
                const result = await createPost(formDataClient)
                if (result) {
                    setTimeout(() => {
                        router.push("/post")
                        alert("Post created successfully!")
                    }, 1000)
                }
            } else {
                const formDataServer = new FormData()
                formDataServer.append("title", formData.title)
                formDataServer.append("body", formData.body)
                await updatePost(post?.id as number, formDataServer)
                alert("Post updated successfully!")
                router.push("/post")
            }
        } catch (error) {
            console.error("Error submitting post:", error)
            alert("Failed to submit post. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants: any = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                {creating ? "Create" : "Update"}
                            </span>
                            <br />
                            <span className="text-white">Your Story</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Share your thoughts, experiences, and insights with our community of readers.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl"
                    >
                        <form className="space-y-8" action={handleForm}>
                            <motion.div variants={itemVariants}>
                                <label htmlFor="title" className="block text-lg font-semibold text-white mb-3">
                                    Post Title
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter an engaging title for your post..."
                                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="content" className="block text-lg font-semibold text-white mb-3">
                                    Post Content
                                </label>
                                <div className="relative">
                                    <textarea
                                        id="content"
                                        name="body"
                                        value={formData.body}
                                        onChange={handleInputChange}
                                        required
                                        rows={12}
                                        placeholder="Write your story here... Share your thoughts, experiences, and insights with the community."
                                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 resize-none"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                                <p className="text-gray-400 text-sm mt-2">
                                    Minimum 50 characters. Be descriptive and engaging.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex justify-between items-center">
                                <div className="text-gray-400 text-sm">
                                    Title: {formData.title.length} characters
                                </div>
                                <div className="text-gray-400 text-sm">
                                    Content: {formData.body.length} characters
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting || !formData.title.trim() || !formData.body.trim()}
                                    className={`flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 ${
                                        isSubmitting || !formData.title.trim() || !formData.body.trim()
                                            ? 'opacity-50 cursor-not-allowed'
                                            : 'hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25'
                                    }`}
                                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            {creating ? "Publishing..." : "Updating..."}
                                        </div>
                                    ) : (
                                        creating ? "Publish Post" : "Update Post"
                                    )}
                                </motion.button>

                                <motion.button
                                    type="button"
                                    onClick={() => router.back()}
                                    className="px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold hover:border-white/40 hover:bg-white/10 transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Cancel
                                </motion.button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
            </div>

            <footer className="py-12 px-6 border-t border-white/10">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <p className="text-gray-400">
                            © 2024 BlogApp. Made with ❤️ and Next.js
                        </p>
                    </motion.div>
                </div>
            </footer>
        </div>
    )
}

export default page;
