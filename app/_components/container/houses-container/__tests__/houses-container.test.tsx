import { render, screen, waitFor } from "@testing-library/react"

import QueryProvider from "@/app/_components/container/query-provider"
import CityContainer from "@/app/_components/container/city-container"
import HousesContainer from "@/app/_components/container/houses-container"

import { THousesContainerProps } from "@/app/_components/container/houses-container/type"
import { THouse } from "@/app/_components/container/houses-list/type"
import { generateAlphanumericId } from "@/app/utils"

const housesWithData: THouse[] = [
  { id: generateAlphanumericId(), name: 'test-house-1', floors: 1, color: 'red' },
  { id: generateAlphanumericId(), name: 'test-house-2', floors: 2, color: 'blue' },
]

describe('Houses Container', () => {
  const defaultProps: THousesContainerProps = {
    house: [],
    cityName: 'Test City'
  }

  beforeEach(async () =>
    await waitFor(async () => render(
      <QueryProvider>
        <CityContainer />
      </QueryProvider>
    )
  ))

  test('should return null when no houses are provided', async () => {
    render(
      <HousesContainer {...defaultProps} />
    )

    // Means only the container is in the document
    const cityContainer = await screen.getByTestId('city-container')
    expect(cityContainer).toBeInTheDocument()
  })

  test('should render Houses component when houses are provided', async () => {
    render (
      <HousesContainer house={housesWithData} cityName="test-city" />
    )

    const housesContainer = await screen.getByTestId('houses-container')
    const house = await screen.findAllByTestId('house')
    expect(housesContainer).toBeInTheDocument()

    expect(house).toHaveLength(2)
  })

  test('should not re-render when house prop does not change', async () => {
    const { rerender } = render(
      <HousesContainer house={housesWithData} cityName="test-city" />
    )

    const housesContainer = await screen.getByTestId('houses-container')
    expect(housesContainer).toBeInTheDocument()

    rerender(<HousesContainer house={housesWithData} cityName="test-city" />)
    expect(housesContainer).toBeInTheDocument()
  })

  test('should re-render when house prop does change', async () => {
    // Note: You should see a console.log in test saying:
    // console.log(`Re-rendering ${prevProps.cityName} House Container due to house update`)
    const { rerender } = render(
      <HousesContainer house={housesWithData} cityName="test-city" />
    )

    const houseData: THouse =
      { id: generateAlphanumericId(), name: 'test-house-3', floors: 1, color: 'pink' }

    const housesContainer = await screen.getByTestId('houses-container')
    expect(housesContainer).toBeInTheDocument()

    rerender(<HousesContainer house={[houseData]} cityName="test-city" />)
    expect(housesContainer).toBeInTheDocument()
  })
})
