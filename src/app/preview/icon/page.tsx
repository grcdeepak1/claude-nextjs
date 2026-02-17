import { Icon } from "@/components/Icon";
import {
  Star,
  Check,
  X,
  Heart,
  Zap,
  Bell,
  FolderOpen,
  Mail,
  Settings,
  Search,
  Home,
  User,
  Shield,
} from "lucide-react";

const colors = ["blue", "green", "purple", "amber", "rose", "teal", "zinc"] as const;
const sizes = ["sm", "md", "lg"] as const;

const sampleIcons = [
  { component: Star, label: "Star" },
  { component: Check, label: "Check" },
  { component: X, label: "X" },
  { component: Heart, label: "Heart" },
  { component: Zap, label: "Zap" },
  { component: Bell, label: "Bell" },
  { component: FolderOpen, label: "FolderOpen" },
];

export default function IconPreviewPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Icon Preview
      </h1>

      <div className="space-y-10">
        {/* Sizes */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Sizes
          </h2>
          <div className="flex items-end gap-4">
            {sizes.map((size) => (
              <div key={size} className="text-center">
                <Icon icon={<Star />} size={size} />
                <p className="mt-1 text-xs text-zinc-500">{size}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Colors */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Colors
          </h2>
          <div className="flex flex-wrap gap-4">
            {colors.map((color) => (
              <div key={color} className="text-center">
                <Icon icon={<Star />} color={color} size="lg" />
                <p className="mt-1 text-xs text-zinc-500">{color}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Different icons */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Various Icons
          </h2>
          <div className="flex flex-wrap gap-4">
            {sampleIcons.map(({ component: LucideIcon, label }, i) => (
              <div key={label} className="text-center">
                <Icon
                  icon={<LucideIcon />}
                  color={colors[i % colors.length]}
                  size="lg"
                />
                <p className="mt-1 text-xs text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Edge cases */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Edge Cases
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="text-center">
              <Icon icon="" />
              <p className="mt-1 text-xs text-zinc-500">Empty string</p>
            </div>
            <div className="text-center">
              <Icon icon={<Search />} color="zinc" size="sm" />
              <p className="mt-1 text-xs text-zinc-500">Small + zinc</p>
            </div>
          </div>
        </section>

        {/* Size × Color Grid */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Size × Color Grid
          </h2>
          <div className="space-y-3">
            {sizes.map((size) => (
              <div key={size} className="flex items-center gap-3">
                <span className="w-6 text-xs font-medium text-zinc-400">
                  {size}
                </span>
                {colors.map((color) => (
                  <Icon key={color} icon={<Star />} size={size} color={color} />
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Composition with text */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Composition with Text
          </h2>
          <div className="space-y-3">
            {[
              { icon: <FolderOpen />, color: "blue" as const, label: "Documents" },
              { icon: <Zap />, color: "amber" as const, label: "Performance" },
              { icon: <Heart />, color: "rose" as const, label: "Favorites" },
              { icon: <Mail />, color: "purple" as const, label: "Messages" },
              { icon: <Settings />, color: "zinc" as const, label: "Settings" },
              { icon: <Home />, color: "green" as const, label: "Home" },
              { icon: <User />, color: "teal" as const, label: "Profile" },
              { icon: <Shield />, color: "amber" as const, label: "Security" },
            ].map(({ icon, color, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon icon={icon} color={color} />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
