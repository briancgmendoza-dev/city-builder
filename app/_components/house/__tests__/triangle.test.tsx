import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Triangle from "@/app/_components/house/triangle";

describe("House: Roof", () => {
  test("renders Roof component correctly", async () => {
    render(<Triangle />);

    const roofElement = await screen.getByTestId("house-triangle");
    expect(roofElement).toBeInTheDocument();

    expect(roofElement).toHaveClass("relative w-[100px] h-0 border-l-[50px] border-r-[50px] border-b-[40px] border-l-transparent border-r-transparent border-t-black bg-white");
  });
});
