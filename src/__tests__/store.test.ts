import { getTasks, getTask, createTask, updateTask, deleteTask } from "@/lib/store";

describe("Task Store", () => {
  it("returns seed tasks", () => {
    const tasks = getTasks();
    expect(tasks.length).toBeGreaterThanOrEqual(3);
  });

  it("gets a task by id", () => {
    const task = getTask("1");
    expect(task).toBeDefined();
    expect(task!.title).toBe("Learn Next.js App Router");
  });

  it("returns undefined for a missing id", () => {
    expect(getTask("nonexistent")).toBeUndefined();
  });

  it("creates a new task", () => {
    const task = createTask({
      title: "Test task",
      description: "A test",
      status: "todo",
      priority: "low",
    });
    expect(task.id).toBeDefined();
    expect(task.title).toBe("Test task");
    expect(task.createdAt).toBeDefined();
  });

  it("creates a task with assignee", () => {
    const task = createTask({
      title: "Assigned task",
      description: "Has assignee",
      status: "todo",
      priority: "medium",
      assignee: "Jane Doe",
    });
    expect(task.assignee).toBe("Jane Doe");
  });

  it("updates a task", () => {
    const updated = updateTask("1", { status: "done" });
    expect(updated).not.toBeNull();
    expect(updated!.status).toBe("done");
  });

  it("returns null when updating a missing task", () => {
    expect(updateTask("nonexistent", { status: "done" })).toBeNull();
  });

  it("deletes a task", () => {
    const task = createTask({
      title: "To delete",
      description: "Will be deleted",
      status: "todo",
      priority: "low",
    });
    expect(deleteTask(task.id)).toBe(true);
    expect(getTask(task.id)).toBeUndefined();
  });

  it("returns false when deleting a missing task", () => {
    expect(deleteTask("nonexistent")).toBe(false);
  });
});
