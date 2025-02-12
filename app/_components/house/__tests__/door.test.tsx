import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Door from "@/app/_components/house/door";

describe("House: Door", () => {
  test("renders Door component correctly", async () => {
    render(<Door />);

    const doorElement = await screen.getByTestId("house-door");
    expect(doorElement).toBeInTheDocument();

    expect(doorElement).toHaveClass("w-[40px] h-[50px] border-2 border-double border-black bg-white");
  });
});
