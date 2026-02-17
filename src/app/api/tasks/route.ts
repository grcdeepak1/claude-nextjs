import { NextRequest, NextResponse } from "next/server";
import { getTasks, createTask } from "@/lib/store";

export async function GET() {
  const tasks = getTasks();
  return NextResponse.json(tasks);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, description, status, priority, assignee } = body;

  if (!title || !description) {
    return NextResponse.json(
      { error: "Title and description are required" },
      { status: 400 }
    );
  }

  const task = createTask({
    title,
    description,
    status: status || "todo",
    priority: priority || "medium",
    ...(assignee ? { assignee } : {}),
  });

  return NextResponse.json(task, { status: 201 });
}
