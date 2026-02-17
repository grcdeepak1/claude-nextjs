import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Card, CardHeader, CardBody, CardFooter } from "@/components/Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Hello world</Card>);
    expect(screen.getByRole("article")).toHaveTextContent("Hello world");
  });

  it("renders as an article element", () => {
    render(<Card>Content</Card>);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  // Variant tests
  it("applies default variant classes for neutral type", () => {
    render(<Card>Content</Card>);
    const el = screen.getByRole("article");
    expect(el.className).toContain("border");
    expect(el.className).toContain("bg-white");
  });

  it("applies outlined variant classes", () => {
    render(<Card variant="outlined">Content</Card>);
    const el = screen.getByRole("article");
    expect(el.className).toContain("border");
    expect(el.className).toContain("bg-transparent");
  });

  it("applies elevated variant classes", () => {
    render(<Card variant="elevated">Content</Card>);
    const el = screen.getByRole("article");
    expect(el.className).toContain("shadow-md");
  });

  it("applies filled variant classes", () => {
    render(<Card variant="filled">Content</Card>);
    const el = screen.getByRole("article");
    expect(el.className).toContain("bg-zinc-100");
  });

  // Type tests
  it("defaults to neutral type", () => {
    render(<Card>Content</Card>);
    const el = screen.getByRole("article");
    expect(el.className).toContain("bg-white");
    expect(el.className).toContain("border-zinc-200");
  });

  it("applies primary type classes", () => {
    render(<Card type="primary">Content</Card>);
    const el = screen.getByRole("article");
    expect(el.className).toContain("bg-blue-50");
    expect(el.className).toContain("text-blue-900");
  });

  it("applies secondary type classes", () => {
    render(<Card type="secondary">Content</Card>);
    const el = screen.getByRole("article");
    expect(el.className).toContain("bg-purple-50");
    expect(el.className).toContain("text-purple-900");
  });

  it("applies success type classes", () => {
    render(<Card type="success">Content</Card>);
    const el = screen.getByRole("article");
    expect(el.className).toContain("bg-green-50");
    expect(el.className).toContain("text-green-900");
  });

  it("applies warning type classes", () => {
    render(<Card type="warning">Content</Card>);
    const el = screen.getByRole("article");
    expect(el.className).toContain("bg-amber-50");
    expect(el.className).toContain("text-amber-900");
  });

  it("applies danger type classes", () => {
    render(<Card type="danger">Content</Card>);
    const el = screen.getByRole("article");
    expect(el.className).toContain("bg-red-50");
    expect(el.className).toContain("text-red-900");
  });

  it("applies filled variant with primary type", () => {
    render(<Card variant="filled" type="primary">Content</Card>);
    const el = screen.getByRole("article");
    expect(el.className).toContain("bg-blue-500");
    expect(el.className).toContain("text-white");
  });

  it("applies filled variant with danger type", () => {
    render(<Card variant="filled" type="danger">Content</Card>);
    const el = screen.getByRole("article");
    expect(el.className).toContain("bg-red-500");
    expect(el.className).toContain("text-white");
  });

  it("applies outlined variant with success type", () => {
    render(<Card variant="outlined" type="success">Content</Card>);
    const el = screen.getByRole("article");
    expect(el.className).toContain("border-green-400");
    expect(el.className).toContain("bg-transparent");
  });

  // Size tests
  it("defaults to md size", () => {
    render(<Card>Content</Card>);
    const el = screen.getByRole("article");
    expect(el.className).toContain("p-4");
    expect(el.className).toContain("rounded-lg");
  });

  it("applies sm size classes", () => {
    render(<Card size="sm">Content</Card>);
    const el = screen.getByRole("article");
    expect(el.className).toContain("p-2");
    expect(el.className).toContain("text-sm");
    expect(el.className).toContain("rounded-md");
  });

  it("applies lg size classes", () => {
    render(<Card size="lg">Content</Card>);
    const el = screen.getByRole("article");
    expect(el.className).toContain("p-6");
    expect(el.className).toContain("text-lg");
    expect(el.className).toContain("rounded-xl");
  });

  // Edge cases
  it("appends custom className", () => {
    render(<Card className="mt-8">Content</Card>);
    expect(screen.getByRole("article").className).toContain("mt-8");
  });

  it("renders with empty children", () => {
    render(<Card>{""}</Card>);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  it("combines type, variant, and size props", () => {
    render(<Card type="warning" variant="elevated" size="lg">Content</Card>);
    const el = screen.getByRole("article");
    expect(el.className).toContain("bg-amber-50");
    expect(el.className).toContain("shadow-md");
    expect(el.className).toContain("p-6");
    expect(el.className).toContain("rounded-xl");
  });
});

describe("CardHeader", () => {
  it("renders children", () => {
    render(<CardHeader>Title</CardHeader>);
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("has bottom border", () => {
    render(<CardHeader>Title</CardHeader>);
    const el = screen.getByText("Title");
    expect(el.className).toContain("border-b");
  });

  it("appends custom className", () => {
    render(<CardHeader className="text-lg">Title</CardHeader>);
    expect(screen.getByText("Title").className).toContain("text-lg");
  });
});

describe("CardBody", () => {
  it("renders children", () => {
    render(<CardBody>Body content</CardBody>);
    expect(screen.getByText("Body content")).toBeInTheDocument();
  });

  it("has vertical padding", () => {
    render(<CardBody>Body content</CardBody>);
    expect(screen.getByText("Body content").className).toContain("py-3");
  });

  it("appends custom className", () => {
    render(<CardBody className="text-sm">Body</CardBody>);
    expect(screen.getByText("Body").className).toContain("text-sm");
  });
});

describe("CardFooter", () => {
  it("renders children", () => {
    render(<CardFooter>Footer</CardFooter>);
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("has top border", () => {
    render(<CardFooter>Footer</CardFooter>);
    const el = screen.getByText("Footer");
    expect(el.className).toContain("border-t");
  });

  it("appends custom className", () => {
    render(<CardFooter className="flex">Footer</CardFooter>);
    expect(screen.getByText("Footer").className).toContain("flex");
  });
});

describe("Card composition", () => {
  it("renders header, body, and footer together", () => {
    render(
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
    const article = screen.getByRole("article");
    expect(article).toHaveTextContent("Header");
    expect(article).toHaveTextContent("Body");
    expect(article).toHaveTextContent("Footer");
  });

  it("renders typed card with subcomponents", () => {
    render(
      <Card type="primary">
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
      </Card>
    );
    const article = screen.getByRole("article");
    expect(article.className).toContain("bg-blue-50");
    expect(article).toHaveTextContent("Header");
    expect(article).toHaveTextContent("Body");
  });
});
