"use client";

import { useState, useEffect } from "react";
import { Note } from "@/lib/types";

const STORAGE_KEY = "learnapp-notes";

function loadNotes(): Note[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    const defaults: Note[] = [
      {
        id: "1",
        title: "Welcome",
        content:
          "# Welcome to Notes\n\nThis is a simple **markdown-style** note editor.\n\n- Notes are saved to localStorage\n- Try creating, editing, and deleting notes\n- Use this as a playground for Claude features",
        updatedAt: new Date().toISOString(),
      },
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaults));
    return defaults;
  }
  return JSON.parse(stored);
}

function saveNotes(notes: Note[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export function NoteEditor() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const loaded = loadNotes();
    setNotes(loaded);
    if (loaded.length > 0) setActiveId(loaded[0].id);
    setMounted(true);
  }, []);

  const activeNote = notes.find((n) => n.id === activeId);

  function handleUpdate(content: string) {
    const updated = notes.map((n) =>
      n.id === activeId ? { ...n, content, updatedAt: new Date().toISOString() } : n
    );
    setNotes(updated);
    saveNotes(updated);
  }

  function handleTitleUpdate(title: string) {
    const updated = notes.map((n) =>
      n.id === activeId ? { ...n, title, updatedAt: new Date().toISOString() } : n
    );
    setNotes(updated);
    saveNotes(updated);
  }

  function handleCreate() {
    const newNote: Note = {
      id: String(Date.now()),
      title: "Untitled",
      content: "",
      updatedAt: new Date().toISOString(),
    };
    const updated = [newNote, ...notes];
    setNotes(updated);
    saveNotes(updated);
    setActiveId(newNote.id);
  }

  function handleDelete(id: string) {
    const updated = notes.filter((n) => n.id !== id);
    setNotes(updated);
    saveNotes(updated);
    setActiveId(updated.length > 0 ? updated[0].id : null);
  }

  if (!mounted) {
    return <div className="py-8 text-center text-zinc-500">Loading notes...</div>;
  }

  return (
    <div className="flex h-[calc(100vh-12rem)] gap-4">
      {/* Sidebar */}
      <div className="w-64 shrink-0 overflow-y-auto rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="border-b border-zinc-200 p-3 dark:border-zinc-800">
          <button
            onClick={handleCreate}
            className="w-full rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            + New Note
          </button>
        </div>
        <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {notes.map((note) => (
            <button
              key={note.id}
              onClick={() => setActiveId(note.id)}
              className={`w-full px-3 py-3 text-left transition-colors ${
                activeId === note.id
                  ? "bg-blue-50 dark:bg-blue-900/20"
                  : "hover:bg-zinc-50 dark:hover:bg-zinc-800"
              }`}
            >
              <div className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {note.title}
              </div>
              <div className="mt-1 truncate text-xs text-zinc-500">
                {new Date(note.updatedAt).toLocaleDateString()}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Editor */}
      {activeNote ? (
        <div className="flex flex-1 flex-col rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
            <input
              type="text"
              value={activeNote.title}
              onChange={(e) => handleTitleUpdate(e.target.value)}
              className="bg-transparent text-lg font-medium text-zinc-900 outline-none dark:text-zinc-100"
            />
            <button
              onClick={() => handleDelete(activeNote.id)}
              className="rounded px-2 py-1 text-xs text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/30"
            >
              Delete
            </button>
          </div>
          <textarea
            value={activeNote.content}
            onChange={(e) => handleUpdate(e.target.value)}
            className="flex-1 resize-none bg-transparent p-4 font-mono text-sm text-zinc-800 outline-none dark:text-zinc-200"
            placeholder="Start writing..."
          />
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center text-zinc-500">
          Select a note or create a new one
        </div>
      )}
    </div>
  );
}
