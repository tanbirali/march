"use client"
import * as React from "react"

import { BubbleMenu, EditorContent, type Editor } from "@tiptap/react"
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Italic,
  List,
  ListOrdered,
  Quote,
  Strikethrough,
} from "lucide-react"

import classNames from "@/src/utils/classNames"

interface Props {
  editor: Editor | null
  placeholder?: string
  content?: string
}

const TextEditor: React.FC<Props> = ({ editor }) => {
  return (
    <div>
      {editor !== null && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          className="w-max"
        >
          <div className="flex items-center gap-2 rounded-xl bg-neutral-900 p-1 text-xs text-neutral-200 shadow-lg">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={classNames(
                "p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-all",
                editor.isActive("bold") ? "bg-neutral-800" : "bg-zinc-900"
              )}
            >
              <Bold size={18} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={classNames(
                "p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-all",
                editor.isActive("italic") ? "bg-neutral-800" : "bg-zinc-900"
              )}
            >
              <Italic size={18} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={classNames(
                "p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-all",
                editor.isActive("strike") ? "bg-neutral-800" : "bg-zinc-900"
              )}
            >
              <Strikethrough size={18} />
            </button>
            <div className="h-6 w-px bg-zinc-900/50" />
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={classNames(
                "p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-all",
                editor.isActive("heading") ? "bg-neutral-800" : "bg-zinc-900"
              )}
            >
              <Heading1 size={18} />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={classNames(
                "p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-all",
                editor.isActive("heading") ? "bg-neutral-800" : "bg-zinc-900"
              )}
            >
              <Heading2 size={18} />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              className={classNames(
                "p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-all",
                editor.isActive("heading") ? "bg-neutral-800" : "bg-zinc-900"
              )}
            >
              <Heading3 size={18} />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 4 }).run()
              }
              className={classNames(
                "p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-all",
                editor.isActive("heading") ? "bg-neutral-800" : "bg-zinc-900"
              )}
            >
              <Heading4 size={18} />
            </button>
            <div className="h-6 w-px bg-zinc-900/50" />
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={classNames(
                "p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-all",
                editor.isActive("bulletList") ? "bg-neutral-800" : "bg-zinc-900"
              )}
            >
              <List size={18} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={classNames(
                "p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-all",
                editor.isActive("orderedList")
                  ? "bg-neutral-800"
                  : "bg-zinc-900"
              )}
            >
              <ListOrdered size={18} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleTaskList().run()}
              className={classNames(
                "p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-all",
                editor.isActive("taskList") ? "bg-neutral-800" : "bg-zinc-900"
              )}
            >
              <ListOrdered size={18} />
            </button>
            <div className="h-6 w-px bg-zinc-900/50" />
            <button
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={classNames(
                "p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-all",
                editor.isActive("blockquote") ? "bg-neutral-800" : "bg-zinc-900"
              )}
            >
              <Quote size={18} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={classNames(
                "p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-all",
                editor.isActive("codeBlock") ? "bg-neutral-800" : "bg-zinc-900"
              )}
            >
              <Code size={18} />
            </button>
          </div>
        </BubbleMenu>
      )}{" "}
      <EditorContent
        className="[&>.ProseMirror.tiptap]:min-h-[70vh]"
        editor={editor}
      />
    </div>
  )
}

export default TextEditor
