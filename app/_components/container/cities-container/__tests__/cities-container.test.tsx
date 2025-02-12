import { render, screen, waitFor, cleanup } from "@testing-library/react";

import QueryProvider from "@/app/_components/container/query-provider";
import CitiesContainer from "@/app/_components/container/cities-container";
import { WeatherService } from "@/app/service/weather-service";

jest.mock("@/app/service/weather-service", () => ({
  WeatherService: {
    getAllCitiesRealTimeWeatherUpdate: jest.fn(),
  },
}));

const mockCitiesData = [
  { name: "City 1", temp_c: "25", condition: { text: "Sunny" }, houses: [] },
  { name: "City 2", temp_c: "22", condition: { text: "Cloudy" }, houses: [] },
];

describe("Cities Container", () => {
  beforeEach(async () =>
    await waitFor(async () => render(
      <QueryProvider>
        <CitiesContainer />
      </QueryProvider>
    )
  ))

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });


  test("renders Cities Container component and shows loading state", async () => {
    (WeatherService.getAllCitiesRealTimeWeatherUpdate as jest.Mock).mockResolvedValueOnce(new Promise((resolve) => setTimeout(() => resolve([]), 1000)));

    const loaderElement = await screen.findByTestId("loading");
    expect(loaderElement).toBeInTheDocument();

    await waitFor(() => {
      const loaderElement = screen.queryByTestId("loading");
      expect(loaderElement).not.toBeInTheDocument();
    });
  });

  test("renders Cities Container component and its child component correctly when data is loaded", async () => {
    (WeatherService.getAllCitiesRealTimeWeatherUpdate as jest.Mock).mockResolvedValueOnce(mockCitiesData);

    await waitFor(() => {
      const containerElement = screen.getByTestId("cities-container");
      const childContainerElement = screen.getByTestId("city-container");

      expect(containerElement).toBeInTheDocument();
      expect(containerElement).toHaveClass("mt-10 flex flex-col md:flex-row");
      expect(containerElement).toContainElement(childContainerElement);
    });
  });
});
