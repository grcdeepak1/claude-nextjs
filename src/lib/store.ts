import { Task } from "./types";

// In-memory store for API routes (resets on server restart)
const tasks: Task[] = [
  {
    id: "1",
    title: "Learn Next.js App Router",
    description: "Understand file-based routing, layouts, and server components",
    status: "in-progress",
    priority: "high",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Build API routes",
    description: "Create RESTful API endpoints using Next.js route handlers",
    status: "todo",
    priority: "medium",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Add Tailwind styling",
    description: "Style components using Tailwind CSS utility classes",
    status: "done",
    priority: "low",
    createdAt: new Date().toISOString(),
  },
];

let nextId = 4;

export function getTasks(): Task[] {
  return [...tasks];
}

export function getTask(id: string): Task | undefined {
  return tasks.find((t) => t.id === id);
}

export function createTask(
  data: Omit<Task, "id" | "createdAt">
): Task {
  const task: Task = {
    ...data,
    id: String(nextId++),
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  return task;
}

export function updateTask(
  id: string,
  data: Partial<Omit<Task, "id" | "createdAt">>
): Task | null {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return null;
  tasks[index] = { ...tasks[index], ...data };
  return tasks[index];
}

export function deleteTask(id: string): boolean {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}
