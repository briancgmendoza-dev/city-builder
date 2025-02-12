import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Windows from "@/app/_components/house/windows";

describe("House: Windows", () => {
  test("renders 2 Windows component correctly", async () => {
    render(<Windows number_of_windows={2} parentWindowsContainerClassName="px-2" />);

    const windowsElement = await screen.findAllByTestId("house-windows");

    expect(windowsElement).toHaveLength(2);
  });

  test("renders 1 Window component correctly", async () => {
    render(<Windows number_of_windows={1} parentWindowsContainerClassName="px-2" />);

    const windowsElement = await screen.getByTestId("house-windows");

    expect(windowsElement).toHaveClass("w-[40px] h-[35px] border border-black bg-white")
  });
});
