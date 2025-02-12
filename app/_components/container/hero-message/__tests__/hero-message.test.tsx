import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HeroMessage from "@/app/_components/container/hero-message";

describe("HeroMessage", () => {
  test("renders HeroMessage component correctly", () => {
    render(<HeroMessage />);

    const headingElement = screen.getByText(/City Builder/i);
    expect(headingElement).toBeInTheDocument();

    expect(headingElement).toHaveClass("text-red-700 font-bold text-xl md:text-2xl");

    const containerElement = screen.getByTestId("hero-message-container");
    expect(containerElement).toBeInTheDocument();
    expect(containerElement).toHaveClass("w-[100%] bg-slate-200 p-4");
  });
});
