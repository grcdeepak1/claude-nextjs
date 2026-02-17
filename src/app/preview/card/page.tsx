import { Card, CardHeader, CardBody, CardFooter } from "@/components/Card";
import { Avatar } from "@/components/Avatar";

const types = [
  "neutral",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
] as const;
const variants = ["default", "outlined", "elevated", "filled"] as const;
const sizes = ["sm", "md", "lg"] as const;

export default function CardPreviewPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Card Preview
      </h1>

      <div className="space-y-10">
        {/* Types — default variant */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Types (default variant)
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {types.map((type) => (
              <Card key={type} type={type}>
                <p className="font-medium capitalize">{type}</p>
                <p className="mt-1 text-sm opacity-75">
                  This is the {type} type card.
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Variants */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Variants (primary type)
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {variants.map((variant) => (
              <Card key={variant} type="primary" variant={variant}>
                <p className="font-medium">{variant}</p>
                <p className="mt-1 text-sm opacity-75">
                  Primary {variant} card.
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Sizes */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Sizes
          </h2>
          <div className="flex flex-wrap items-start gap-4">
            {sizes.map((size) => (
              <Card key={size} type="secondary" size={size}>
                <p className="font-medium">size=&quot;{size}&quot;</p>
                <p className="mt-1 opacity-75">Content here.</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Type × Variant grid */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Type x Variant Grid
          </h2>
          <div className="space-y-3">
            {types.map((type) => (
              <div key={type} className="flex items-start gap-3">
                <span className="w-20 shrink-0 pt-3 text-xs font-medium text-zinc-400">
                  {type}
                </span>
                <div className="grid flex-1 grid-cols-4 gap-3">
                  {variants.map((variant) => (
                    <Card
                      key={`${type}-${variant}`}
                      type={type}
                      variant={variant}
                      size="sm"
                    >
                      <p className="text-xs font-medium">{variant}</p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filled type showcase */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Filled Variants (all types)
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {types.map((type) => (
              <Card key={type} type={type} variant="filled">
                <p className="font-semibold capitalize">{type}</p>
                <p className="mt-1 text-sm opacity-80">
                  Filled {type} card with bold background.
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Subcomponents with types */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Subcomponents (Header + Body + Footer)
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(["primary", "success", "danger"] as const).map((type) => (
              <Card key={type} type={type}>
                <CardHeader>
                  <h3 className="font-semibold capitalize">{type} Card</h3>
                </CardHeader>
                <CardBody>
                  <p className="text-sm opacity-75">
                    Card body with {type} styling and section dividers.
                  </p>
                </CardBody>
                <CardFooter>
                  <p className="text-xs opacity-60">Footer content</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Size × Type grid */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Size x Type Grid
          </h2>
          <div className="space-y-3">
            {sizes.map((size) => (
              <div key={size} className="flex items-start gap-3">
                <span className="w-8 shrink-0 pt-2 text-xs font-medium text-zinc-400">
                  {size}
                </span>
                <div className="flex flex-wrap gap-3">
                  {types.map((type) => (
                    <Card key={`${size}-${type}`} type={type} size={size}>
                      <p className="font-medium capitalize">{type}</p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Edge cases */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Edge Cases
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="mb-1 text-xs text-zinc-500">Empty card</p>
              <Card type="primary">{""}</Card>
            </div>
            <div>
              <p className="mb-1 text-xs text-zinc-500">Long content</p>
              <Card type="warning">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Card>
            </div>
            <div>
              <p className="mb-1 text-xs text-zinc-500">Nested cards</p>
              <Card type="secondary">
                <p className="mb-2 text-sm font-medium">Outer card</p>
                <Card type="danger" variant="filled" size="sm">
                  <p className="text-xs">Inner card</p>
                </Card>
              </Card>
            </div>
          </div>
        </section>

        {/* Real-world: profile card */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            Real-World Examples
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card type="neutral">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar name="Jane Cooper" size="lg" />
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                      Jane Cooper
                    </h3>
                    <p className="text-sm text-zinc-500">Software Engineer</p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Building amazing things with TypeScript and React.
                </p>
              </CardBody>
              <CardFooter>
                <div className="flex gap-4 text-sm text-zinc-500">
                  <span>12 projects</span>
                  <span>48 contributions</span>
                </div>
              </CardFooter>
            </Card>

            <Card type="success" variant="filled">
              <p className="font-semibold">Payment Successful</p>
              <p className="mt-1 text-sm opacity-80">
                Your payment of $49.99 has been processed successfully.
              </p>
            </Card>

            <Card type="danger">
              <CardHeader>
                <h3 className="font-semibold">Error Report</h3>
              </CardHeader>
              <CardBody>
                <p className="text-sm opacity-75">
                  3 critical errors were found in the latest deployment.
                </p>
              </CardBody>
              <CardFooter>
                <p className="text-xs opacity-60">Last checked: 2 min ago</p>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
