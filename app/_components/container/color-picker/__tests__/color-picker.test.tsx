import { render, screen, waitFor, cleanup } from "@testing-library/react";

import QueryProvider from "@/app/_components/container/query-provider";
import ColorPicker from "@/app/_components/container/color-picker";

describe("Color Picker Container", () => {
  beforeEach(async () =>
    await waitFor(async () => render(
      <QueryProvider>
        <ColorPicker color="red" cb={() => {}} />
      </QueryProvider>
    )
  ))

  afterEach(() => {
    cleanup();
  });

  test("renders Color Picker component", async () => {
    const colorPickerContainer = await screen.findByTestId("color-picker-container");
    const colorPickerTypographyChild = await screen.getByText("Color:")
    const colorPickerSelectChild = await screen.findByTestId("select")

    expect(colorPickerContainer).toBeInTheDocument();
    expect(colorPickerContainer).toHaveClass("px-3 py-1 flex items-center justify-between w-[180px]");
    expect(colorPickerContainer).toContainElement(colorPickerTypographyChild)
    expect(colorPickerContainer).toContainElement(colorPickerSelectChild)

    expect(colorPickerTypographyChild).toBeInTheDocument()
    expect(colorPickerTypographyChild).toHaveClass("text-sm mr-1 font-semibold")

    expect(colorPickerSelectChild).toBeInTheDocument()
    expect(colorPickerSelectChild).toHaveClass("border px-2 rounded-[5px]")
    // TODO: Select on change handler/cb
  });
});
