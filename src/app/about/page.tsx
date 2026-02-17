import { Avatar } from "@/components/Avatar";

const team = [
  { name: "Alice Chen", role: "Frontend Developer" },
  { name: "Bob Smith", role: "Backend Developer" },
  { name: "Carol Davis", role: "Designer" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">About</h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        LearnApp is a simple task and note management application built with Next.js, React, and Tailwind CSS.
      </p>

      <h3 className="mt-8 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Team</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex items-center gap-4 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <Avatar name={member.name} size="lg" />
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-100">{member.name}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
