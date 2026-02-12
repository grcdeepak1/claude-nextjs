import { TaskList } from "@/components/TaskList";

export default function TasksPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Task Manager
      </h1>
      <TaskList />
    </div>
  );
}
