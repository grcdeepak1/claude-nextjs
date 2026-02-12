"use client";

import { useEffect, useState } from "react";
import { Task } from "@/lib/types";
import { TaskForm } from "./TaskForm";

const statusColors: Record<Task["status"], string> = {
  todo: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  "in-progress": "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  done: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
};

const priorityColors: Record<Task["priority"], string> = {
  low: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
  medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  high: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState<Task["status"] | "all">("all");

  async function fetchTasks() {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  async function handleDelete(id: string) {
    await fetch(`/api/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((t) => t.id !== id));
  }

  async function handleStatusChange(id: string, status: Task["status"]) {
    const res = await fetch(`/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    const updated = await res.json();
    setTasks(tasks.map((t) => (t.id === id ? updated : t)));
  }

  async function handleCreated() {
    setShowForm(false);
    await fetchTasks();
  }

  const filtered = filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  if (loading) {
    return <div className="py-8 text-center text-zinc-500">Loading tasks...</div>;
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          {(["all", "todo", "in-progress", "done"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                filter === s
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              }`}
            >
              {s === "all" ? "All" : s}
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          {showForm ? "Cancel" : "+ New Task"}
        </button>
      </div>

      {showForm && <TaskForm onCreated={handleCreated} />}

      {filtered.length === 0 ? (
        <p className="py-8 text-center text-zinc-500">No tasks found.</p>
      ) : (
        <div className="space-y-3">
          {filtered.map((task) => (
            <div
              key={task.id}
              className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                    {task.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    {task.description}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusColors[task.status]}`}>
                      {task.status}
                    </span>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${priorityColors[task.priority]}`}>
                      {task.priority}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <select
                    value={task.status}
                    onChange={(e) => handleStatusChange(task.id, e.target.value as Task["status"])}
                    className="rounded border border-zinc-300 bg-white px-2 py-1 text-xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    <option value="todo">todo</option>
                    <option value="in-progress">in-progress</option>
                    <option value="done">done</option>
                  </select>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="rounded bg-red-50 px-2 py-1 text-xs text-red-600 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
