"use client";

import { useState } from "react";
import { Task } from "@/lib/types";

interface TaskFormProps {
  onCreated: () => void;
}

export function TaskForm({ onCreated }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Task["priority"]>("medium");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    setSubmitting(true);
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, priority, status: "todo" }),
    });
    setSubmitting(false);
    onCreated();
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="mb-3 font-medium text-zinc-900 dark:text-zinc-100">New Task</h3>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          required
        />
        <div className="flex items-center gap-4">
          <label className="text-sm text-zinc-600 dark:text-zinc-400">Priority:</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Task["priority"])}
            className="rounded border border-zinc-300 bg-white px-2 py-1 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button
            type="submit"
            disabled={submitting}
            className="ml-auto rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {submitting ? "Adding..." : "Add Task"}
          </button>
        </div>
      </div>
    </form>
  );
}
