import { NoteEditor } from "@/components/NoteEditor";

export default function NotesPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Notes
      </h1>
      <NoteEditor />
    </div>
  );
}
