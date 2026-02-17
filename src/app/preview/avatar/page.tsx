import { Avatar } from "@/components/Avatar";

const sampleNames = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Brown",
  "Diana Prince",
  "Edward Norton",
  "Fiona Apple",
  "George Lucas",
  "Hannah Montana",
];

export default function AvatarPreviewPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Avatar Preview
      </h1>

      <div className="space-y-10">
        {/* Sizes */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Sizes
          </h2>
          <div className="flex items-end gap-4">
            <div className="text-center">
              <Avatar name="Small User" size="sm" />
              <p className="mt-1 text-xs text-zinc-500">sm</p>
            </div>
            <div className="text-center">
              <Avatar name="Medium User" size="md" />
              <p className="mt-1 text-xs text-zinc-500">md</p>
            </div>
            <div className="text-center">
              <Avatar name="Large User" size="lg" />
              <p className="mt-1 text-xs text-zinc-500">lg</p>
            </div>
          </div>
        </section>

        {/* Color variations */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Color Hashing (different names produce different colors)
          </h2>
          <div className="flex flex-wrap gap-3">
            {sampleNames.map((name) => (
              <div key={name} className="text-center">
                <Avatar name={name} size="lg" />
                <p className="mt-1 text-xs text-zinc-500">{name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Initials logic */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Initials Logic
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "John Doe", note: "First + Last → JD" },
              { name: "Alice", note: "Single name → A" },
              { name: "Mary Jane Watson", note: "First + Last → MW" },
              { name: " ", note: "Whitespace → ?" },
            ].map(({ name, note }) => (
              <div key={note} className="text-center">
                <Avatar name={name} size="md" />
                <p className="mt-1 text-xs text-zinc-500">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Group / stacked */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Stacked Group
          </h2>
          <div className="flex -space-x-2">
            {sampleNames.slice(0, 5).map((name) => (
              <Avatar
                key={name}
                name={name}
                size="md"
                className="ring-2 ring-white dark:ring-zinc-900"
              />
            ))}
          </div>
        </section>

        {/* All sizes × all colors */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Size × Color Grid
          </h2>
          <div className="space-y-3">
            {(["sm", "md", "lg"] as const).map((size) => (
              <div key={size} className="flex items-center gap-3">
                <span className="w-6 text-xs font-medium text-zinc-400">{size}</span>
                {sampleNames.map((name) => (
                  <Avatar key={name} name={name} size={size} />
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
