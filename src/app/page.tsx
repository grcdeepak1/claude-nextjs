export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        Welcome to LearnApp
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        A sample Next.js application for learning Claude features.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Task Manager"
          description="Full CRUD with API routes, filtering, and status management."
          href="/tasks"
          tag="API Routes"
        />
        <FeatureCard
          title="Notes Editor"
          description="Client-side note editor with localStorage persistence."
          href="/notes"
          tag="Client State"
        />
        <FeatureCard
          title="Dark Mode"
          description="Theme toggle with system preference detection."
          href="#"
          tag="Theme"
        />
      </div>

      <div className="mt-12 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Things to try with Claude
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <li>&bull; Ask Claude to add search/filter to the task list</li>
          <li>&bull; Ask Claude to add markdown preview to the notes editor</li>
          <li>&bull; Ask Claude to add form validation with error messages</li>
          <li>&bull; Ask Claude to refactor a component into smaller pieces</li>
          <li>&bull; Ask Claude to add tests for the API routes</li>
          <li>&bull; Ask Claude to add a new feature like tags or categories</li>
          <li>&bull; Ask Claude to fix a bug or improve performance</li>
          <li>&bull; Ask Claude to explain how any part of the code works</li>
        </ul>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  href,
  tag,
}: {
  title: string;
  description: string;
  href: string;
  tag: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-lg border border-zinc-200 p-5 transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-zinc-800 dark:hover:border-blue-800 dark:hover:bg-blue-900/10"
    >
      <span className="mb-2 inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
        {tag}
      </span>
      <h3 className="mt-2 font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
        {title}
      </h3>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
    </a>
  );
}
