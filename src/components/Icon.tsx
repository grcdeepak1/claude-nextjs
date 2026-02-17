"use client";

import { type ReactNode } from "react";

interface IconProps {
  icon: ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "green" | "purple" | "amber" | "rose" | "teal" | "zinc";
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-14 w-14 text-xl",
};

const colorClasses = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  green: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  amber: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
  rose: "bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300",
  teal: "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300",
  zinc: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
};

export function Icon({
  icon,
  size = "md",
  color = "blue",
  className = "",
}: IconProps) {
  return (
    <span
      role="img"
      aria-hidden="true"
      className={`inline-flex items-center justify-center rounded-full ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
    >
      {icon}
    </span>
  );
}
