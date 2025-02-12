import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Floors from "@/app/_components/house/floors";
import Windows from "@/app/_components/house/windows";
import Door from "@/app/_components/house/door";

describe("House: Floors", () => {
  test("renders Floors with 2 Windows component correctly", async () => {
    render(
    <Floors color="red" floorsClassName="px-2">
      <Windows number_of_windows={2} />
    </Floors>
  );

    const floorsElement = await screen.getByTestId("house-floors-container");
    const windowsContainer = await screen.getByTestId("house-windows-container")
    const windowsElement = await screen.findAllByTestId("house-windows")

    expect(floorsElement).toBeInTheDocument();
    expect(floorsElement).toHaveClass("w-[100px] border-2 border-black px-2");
    expect(floorsElement).toContainElement(windowsContainer)

    expect(windowsElement).toHaveLength(2)
  });

  test("renders Floors with 1 Window and 1 Door component correctly", async () => {
    render(
    <Floors color="red" floorsClassName="px-2">
      <Windows number_of_windows={1} />
      <Door />
    </Floors>
  );

    const floorsContainer = await screen.getByTestId("house-floors-container");
    const windowsContainer = await screen.getByTestId("house-windows-container")
    const windowsElement = await screen.getByTestId("house-windows")
    const doorElement = await screen.getByTestId("house-door")

    expect(floorsContainer).toBeInTheDocument();
    expect(floorsContainer).toHaveClass("w-[100px] border-2 border-black px-2");
    expect(floorsContainer).toContainElement(windowsContainer)
    expect(floorsContainer).toContainElement(doorElement)

    expect(windowsContainer).toContainElement(windowsElement)
  });
});
