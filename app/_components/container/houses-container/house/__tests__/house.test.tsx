import { render, screen, waitFor } from "@testing-library/react"

import QueryProvider from "@/app/_components/container/query-provider"
import CityContainer from "@/app/_components/container/city-container"
import House from "@/app/_components/container/houses-container/house"

import { THouse } from "@/app/_components/container/houses-list/type"
import { generateAlphanumericId } from "@/app/utils"

const houseWithData: THouse = {
  id: generateAlphanumericId(),
  name: 'test-house-1',
  floors: 1,
  color: 'red'
}

describe('House Container', () => {

  beforeEach(async () =>
    await waitFor(async () => render(
      <QueryProvider>
        <CityContainer />
      </QueryProvider>
    )
  ))

  test('should render House Design when house is provided', async () => {
    render (
      <House house={houseWithData}  />
    )

    const houseContainer = await screen.getByTestId('house')
    expect(houseContainer).toBeInTheDocument()

    const floorsContainer = await screen.getByTestId("house-floors-container");
    const windowsContainer = await screen.getByTestId("house-windows-container")
    const windowsElement = await screen.getByTestId("house-windows")
    const doorElement = await screen.getByTestId("house-door")

    expect(floorsContainer).toBeInTheDocument();
    expect(floorsContainer).toHaveClass("w-[100px] border-2 border-black pt-6 flex px-1.5");
    expect(floorsContainer).toContainElement(windowsContainer)
    expect(floorsContainer).toContainElement(doorElement)

    expect(windowsContainer).toContainElement(windowsElement)
  })

  test('should not re-render when house prop did not change', async () => {
    const { rerender } = render(
      <House house={houseWithData} />
    )

    const houseContainer = await screen.getByTestId('house')
    expect(houseContainer).toBeInTheDocument()

    rerender(<House house={houseWithData} />)
    expect(houseContainer).toBeInTheDocument()
  })

  test('should re-render when house prop did change', async () => {
    // Note: You should see a console.log in test saying (depending on which value is changed):
    // console.log(`Re-rendering House with ${id} -> color from ${prevColor} to ${nextColor}
    // OR
    // console.log(`Re-rendering House with ${id} -> number of floors from ${prevFloors} to ${nextFloors}`);
    const { rerender } = render(
      <House house={houseWithData} />
    )

    const updatedHouseData: THouse = {
      id: 'test2',
      name: 'test-house-2',
      floors: 1,
      color: 'blue'
    }

    const houseContainer = await screen.getByTestId('house')
    expect(houseContainer).toBeInTheDocument()

    rerender(<House house={updatedHouseData} />)
    expect(houseContainer).toBeInTheDocument()
  })
})
