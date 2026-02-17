"use client";

interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0 || !parts[0]) return "?";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const colorPalettes = [
  "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
  "bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300",
  "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300",
  "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
  "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300",
];

function getColorClasses(name: string): string {
  const hash = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return colorPalettes[hash % colorPalettes.length];
}

const sizeClasses = {
  sm: "h-6 w-6 text-xs",
  md: "h-8 w-8 text-sm",
  lg: "h-12 w-12 text-base",
};

export function Avatar({ name, size = "md", className = "" }: AvatarProps) {
  return (
    <div
      role="img"
      aria-label={name}
      className={`inline-flex items-center justify-center rounded-full font-medium ${sizeClasses[size]} ${getColorClasses(name)} ${className}`}
    >
      {getInitials(name)}
    </div>
  );
}
