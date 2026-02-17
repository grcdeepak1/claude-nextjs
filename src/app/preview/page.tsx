import Link from "next/link";

const previews = [
  {
    name: "Avatar",
    href: "/preview/avatar",
    description: "User avatar with initials, color hashing, and size variants",
  },
  {
    name: "Card",
    href: "/preview/card",
    description:
      "Composable card with variants, padding sizes, and header/body/footer sections",
  },
  {
    name: "Icon",
    href: "/preview/icon",
    description:
      "Icon with circular background, color variants, and size options",
  },
];

export default function PreviewsPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Component Previews
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {previews.map((preview) => (
          <Link
            key={preview.href}
            href={preview.href}
            className="rounded-lg border border-zinc-200 p-4 transition-colors hover:border-blue-400 hover:bg-blue-50 dark:border-zinc-700 dark:hover:border-blue-600 dark:hover:bg-blue-950"
          >
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {preview.name}
            </h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {preview.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
