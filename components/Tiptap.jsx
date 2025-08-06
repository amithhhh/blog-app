'use client'

import { useState } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import Link from "@tiptap/extension-link"
import TaskList from "@tiptap/extension-task-list"
import TaskItem from "@tiptap/extension-task-item"


const Tiptap = () => {

    const [submitted, setSubmitted] = useState(false);

    const editor = useEditor({
        extensions: [StarterKit.configure({
            bulletList: false,
            orderedList: false
        }), Underline, 
    Link.configure({ openOnClick: false }), 
    TaskList, TaskItem.configure({ nested: true }),],
        content: '<p>Hello World </p>',
        immediatelyRender: false
    })

    const handleSubmit = async () => {
        if (!editor) return

        const html = editor.getHTML()

        console.log(html)
    }

    return (
    <div className="max-w-2xl mx-auto p-4 border rounded shadow bg-white">
      {editor && (
        <div className="mb-3 flex flex-wrap gap-2">
          <button onClick={() => editor.chain().focus().toggleBold().run()}
            className={`${editor.isActive('bold') ? 'bg-indigo-500 text-white' : 'bg-gray-200'} px-2 py-1 rounded`}>
            Bold
          </button>
          <button onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`${editor.isActive('italic') ? 'bg-indigo-500 text-white' : 'bg-gray-200'} px-2 py-1 rounded`}>
            Italic
          </button>
          <button onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`${editor.isActive('underline') ? 'bg-indigo-500 text-white' : 'bg-gray-200'} px-2 py-1 rounded`}>
            Underline
          </button>
          <button onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`${editor.isActive('bulletList') ? 'bg-indigo-500 text-white' : 'bg-gray-200'} px-2 py-1 rounded`}>
            • Bullet
          </button>
          <button onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`${editor.isActive('orderedList') ? 'bg-indigo-500 text-white' : 'bg-gray-200'} px-2 py-1 rounded`}>
            1. List
          </button>
          <button onClick={() => editor.chain().focus().toggleTaskList().run()}
            className={`${editor.isActive('taskList') ? 'bg-indigo-500 text-white' : 'bg-gray-200'} px-2 py-1 rounded`}>
            ✅ Task
          </button>
          <button onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`${editor.isActive('blockquote') ? 'bg-indigo-500 text-white' : 'bg-gray-200'} px-2 py-1 rounded`}>
            “ Quote ”
          </button>
          <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`${editor.isActive('heading', { level: 1 }) ? 'bg-indigo-500 text-white' : 'bg-gray-200'} px-2 py-1 rounded`}>
            H1
          </button>
          <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`${editor.isActive('heading', { level: 2 }) ? 'bg-indigo-500 text-white' : 'bg-gray-200'} px-2 py-1 rounded`}>
            H2
          </button>
          <button onClick={() => {
            const url = window.prompt('Enter a URL')
            if (url) {
              editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
            }
          }}
            className="bg-blue-300 text-white px-2 py-1 rounded">
            🔗 Link
          </button>
          <button onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
            className="bg-red-400 text-white px-2 py-1 rounded">
            Clear
          </button>
        </div>
      )}

      <div className="border border-gray-300 rounded p-3 min-h-[200px]">
        <EditorContent editor={editor} />
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Submit
      </button>

      {submitted && <p className="mt-2 text-green-600">✔ Content submitted successfully!</p>}
    </div>
  )
}

export default Tiptap