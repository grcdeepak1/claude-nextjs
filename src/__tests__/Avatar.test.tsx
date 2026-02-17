import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Avatar } from "@/components/Avatar";

describe("Avatar", () => {
  it("renders initials from a two-word name", () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByRole("img")).toHaveTextContent("JD");
  });

  it("renders a single initial from a one-word name", () => {
    render(<Avatar name="Alice" />);
    expect(screen.getByRole("img")).toHaveTextContent("A");
  });

  it("uses first and last word for multi-word names", () => {
    render(<Avatar name="Mary Jane Watson" />);
    expect(screen.getByRole("img")).toHaveTextContent("MW");
  });

  it("renders '?' for an empty name", () => {
    render(<Avatar name="" />);
    expect(screen.getByRole("img")).toHaveTextContent("?");
  });

  it("sets aria-label to the name", () => {
    render(<Avatar name="Bob Smith" />);
    expect(screen.getByRole("img")).toHaveAttribute("aria-label", "Bob Smith");
  });

  it("applies size classes for sm", () => {
    render(<Avatar name="Test" size="sm" />);
    const el = screen.getByRole("img");
    expect(el.className).toContain("h-6");
    expect(el.className).toContain("w-6");
  });

  it("applies size classes for lg", () => {
    render(<Avatar name="Test" size="lg" />);
    const el = screen.getByRole("img");
    expect(el.className).toContain("h-12");
    expect(el.className).toContain("w-12");
  });

  it("produces deterministic colors for the same name", () => {
    const { unmount } = render(<Avatar name="Alice Chen" />);
    const classes1 = screen.getByRole("img").className;
    unmount();

    render(<Avatar name="Alice Chen" />);
    const classes2 = screen.getByRole("img").className;
    expect(classes1).toBe(classes2);
  });

  it("appends custom className", () => {
    render(<Avatar name="Test" className="ml-4" />);
    expect(screen.getByRole("img").className).toContain("ml-4");
  });
});
