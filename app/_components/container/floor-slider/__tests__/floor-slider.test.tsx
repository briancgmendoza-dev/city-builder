import { render, screen, waitFor, cleanup } from "@testing-library/react";

import QueryProvider from "@/app/_components/container/query-provider";
import FloorSlider from "@/app/_components/container/floor-slider";

const floorNumber: number = 1

describe("Floor Slider Container", () => {
  beforeEach(async () =>
    await waitFor(async () => render(
      <QueryProvider>
        <FloorSlider floors={floorNumber} cb={() => {}} />
      </QueryProvider>
    )
  ))

  afterEach(() => {
    cleanup();
  });

  test("renders Floor Slider component", async () => {
    const floorSliderContainer = await screen.findByTestId("floor-slider-container");
    const floorSliderTypographyChild = await screen.getByText(`Floors: ${floorNumber}`)
    const floorSliderChild = await screen.findByTestId("slider")

    expect(floorSliderContainer).toBeInTheDocument();
    expect(floorSliderContainer).toHaveClass("px-3 py-1 flex md:flex-col align-center justify-between w-[220px]");
    expect(floorSliderContainer).toContainElement(floorSliderTypographyChild)
    expect(floorSliderContainer).toContainElement(floorSliderChild)

    expect(floorSliderTypographyChild).toBeInTheDocument()
    expect(floorSliderTypographyChild).toHaveClass("text-sm font-semibold")

    expect(floorSliderChild).toBeInTheDocument()
    // TODO: Slider on change handler/cb
  });
});
