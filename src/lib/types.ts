export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  createdAt: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
}
