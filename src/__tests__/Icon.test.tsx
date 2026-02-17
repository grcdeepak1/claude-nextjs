import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Icon } from "@/components/Icon";
import { Star, Check, Heart } from "lucide-react";

describe("Icon", () => {
  it("renders with default props", () => {
    render(<Icon icon={<Star data-testid="star" />} />);
    const el = screen.getByRole("img", { hidden: true });
    expect(screen.getByTestId("star")).toBeInTheDocument();
    // default size is md
    expect(el.className).toContain("h-10");
    expect(el.className).toContain("w-10");
    // default color is blue
    expect(el.className).toContain("bg-blue-100");
  });

  it("renders with size sm", () => {
    render(<Icon icon={<Check />} size="sm" />);
    const el = screen.getByRole("img", { hidden: true });
    expect(el.className).toContain("h-8");
    expect(el.className).toContain("w-8");
  });

  it("renders with size md", () => {
    render(<Icon icon={<Check />} size="md" />);
    const el = screen.getByRole("img", { hidden: true });
    expect(el.className).toContain("h-10");
    expect(el.className).toContain("w-10");
  });

  it("renders with size lg", () => {
    render(<Icon icon={<Check />} size="lg" />);
    const el = screen.getByRole("img", { hidden: true });
    expect(el.className).toContain("h-14");
    expect(el.className).toContain("w-14");
  });

  it("renders with color green", () => {
    render(<Icon icon={<Check />} color="green" />);
    const el = screen.getByRole("img", { hidden: true });
    expect(el.className).toContain("bg-green-100");
    expect(el.className).toContain("text-green-700");
  });

  it("renders with color purple", () => {
    render(<Icon icon={<Check />} color="purple" />);
    const el = screen.getByRole("img", { hidden: true });
    expect(el.className).toContain("bg-purple-100");
    expect(el.className).toContain("text-purple-700");
  });

  it("renders with color amber", () => {
    render(<Icon icon={<Check />} color="amber" />);
    const el = screen.getByRole("img", { hidden: true });
    expect(el.className).toContain("bg-amber-100");
  });

  it("renders with color rose", () => {
    render(<Icon icon={<Heart />} color="rose" />);
    const el = screen.getByRole("img", { hidden: true });
    expect(el.className).toContain("bg-rose-100");
  });

  it("renders with color teal", () => {
    render(<Icon icon={<Check />} color="teal" />);
    const el = screen.getByRole("img", { hidden: true });
    expect(el.className).toContain("bg-teal-100");
  });

  it("renders with color zinc", () => {
    render(<Icon icon={<Check />} color="zinc" />);
    const el = screen.getByRole("img", { hidden: true });
    expect(el.className).toContain("bg-zinc-100");
  });

  it("has aria-hidden attribute", () => {
    render(<Icon icon={<Star />} />);
    const el = screen.getByRole("img", { hidden: true });
    expect(el).toHaveAttribute("aria-hidden", "true");
  });

  it("renders a rounded-full circle", () => {
    render(<Icon icon={<Star />} />);
    const el = screen.getByRole("img", { hidden: true });
    expect(el.className).toContain("rounded-full");
  });

  it("appends custom className", () => {
    render(<Icon icon={<Star />} className="ml-4" />);
    const el = screen.getByRole("img", { hidden: true });
    expect(el.className).toContain("ml-4");
  });

  it("renders ReactNode content", () => {
    render(<Icon icon={<svg data-testid="svg-icon" />} />);
    expect(screen.getByTestId("svg-icon")).toBeInTheDocument();
  });

  it("renders with empty string icon", () => {
    render(<Icon icon="" />);
    const el = screen.getByRole("img", { hidden: true });
    expect(el).toBeInTheDocument();
    expect(el.textContent).toBe("");
  });

  it("produces same output for same props", () => {
    const { unmount } = render(
      <Icon icon={<Star />} size="lg" color="purple" />
    );
    const classes1 = screen.getByRole("img", { hidden: true }).className;
    unmount();

    render(<Icon icon={<Star />} size="lg" color="purple" />);
    const classes2 = screen.getByRole("img", { hidden: true }).className;
    expect(classes1).toBe(classes2);
  });
});
