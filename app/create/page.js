'use client';

import Tiptap from "@/components/Tiptap"
import dynamic from "next/dynamic"
import '../globals.css'

const Editor = dynamic(() => import('@/components/Tiptap'), {
  ssr: false,
})

export default function Create() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4 font-mono">Create your Blog</h1>
      <Editor />
    </main>
  )
}