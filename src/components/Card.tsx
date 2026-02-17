"use client";

import { ReactNode } from "react";

type CardType =
  | "neutral"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "outlined" | "elevated" | "filled";
  type?: CardType;
  size?: "sm" | "md" | "lg";
  className?: string;
}

interface CardSectionProps {
  children: ReactNode;
  className?: string;
}

const typeClasses: Record<
  CardType,
  { default: string; outlined: string; elevated: string; filled: string }
> = {
  neutral: {
    default:
      "border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900",
    outlined: "border border-zinc-300 bg-transparent dark:border-zinc-600",
    elevated: "bg-white shadow-md dark:bg-zinc-900 dark:shadow-zinc-800/50",
    filled: "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
  },
  primary: {
    default:
      "border border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100",
    outlined:
      "border border-blue-400 bg-transparent text-blue-700 dark:border-blue-600 dark:text-blue-300",
    elevated:
      "bg-blue-50 text-blue-900 shadow-md shadow-blue-200/50 dark:bg-blue-950 dark:text-blue-100 dark:shadow-blue-900/50",
    filled: "bg-blue-500 text-white dark:bg-blue-600",
  },
  secondary: {
    default:
      "border border-purple-200 bg-purple-50 text-purple-900 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-100",
    outlined:
      "border border-purple-400 bg-transparent text-purple-700 dark:border-purple-600 dark:text-purple-300",
    elevated:
      "bg-purple-50 text-purple-900 shadow-md shadow-purple-200/50 dark:bg-purple-950 dark:text-purple-100 dark:shadow-purple-900/50",
    filled: "bg-purple-500 text-white dark:bg-purple-600",
  },
  success: {
    default:
      "border border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100",
    outlined:
      "border border-green-400 bg-transparent text-green-700 dark:border-green-600 dark:text-green-300",
    elevated:
      "bg-green-50 text-green-900 shadow-md shadow-green-200/50 dark:bg-green-950 dark:text-green-100 dark:shadow-green-900/50",
    filled: "bg-green-500 text-white dark:bg-green-600",
  },
  warning: {
    default:
      "border border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100",
    outlined:
      "border border-amber-400 bg-transparent text-amber-700 dark:border-amber-600 dark:text-amber-300",
    elevated:
      "bg-amber-50 text-amber-900 shadow-md shadow-amber-200/50 dark:bg-amber-950 dark:text-amber-100 dark:shadow-amber-900/50",
    filled: "bg-amber-500 text-white dark:bg-amber-600",
  },
  danger: {
    default:
      "border border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100",
    outlined:
      "border border-red-400 bg-transparent text-red-700 dark:border-red-600 dark:text-red-300",
    elevated:
      "bg-red-50 text-red-900 shadow-md shadow-red-200/50 dark:bg-red-950 dark:text-red-100 dark:shadow-red-900/50",
    filled: "bg-red-500 text-white dark:bg-red-600",
  },
};

const sizeClasses = {
  sm: "p-2 text-sm rounded-md",
  md: "p-4 text-base rounded-lg",
  lg: "p-6 text-lg rounded-xl",
};

export function Card({
  children,
  variant = "default",
  type = "neutral",
  size = "md",
  className = "",
}: CardProps) {
  return (
    <article
      className={`${sizeClasses[size]} ${typeClasses[type][variant]} ${className}`}
    >
      {children}
    </article>
  );
}

export function CardHeader({ children, className = "" }: CardSectionProps) {
  return (
    <div
      className={`border-b border-current/15 pb-3 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardBody({ children, className = "" }: CardSectionProps) {
  return <div className={`py-3 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }: CardSectionProps) {
  return (
    <div
      className={`border-t border-current/15 pt-3 ${className}`}
    >
      {children}
    </div>
  );
}
