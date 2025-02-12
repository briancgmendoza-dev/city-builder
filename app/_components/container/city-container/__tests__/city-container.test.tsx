import { render, screen, waitFor, cleanup } from "@testing-library/react";

import QueryProvider from "@/app/_components/container/query-provider";
import CityContainer from "@/app/_components/container/city-container";

import { useQuery } from "@tanstack/react-query";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

const mockCitiesData = [
  { name: "City 1", temp_c: "25", condition: { text: "Sunny" }, houses: [] },
  { name: "City 2", temp_c: "22", condition: { text: "Cloudy" }, houses: [] },
];

describe("City Container", () => {
  beforeAll(() => {
    // Mock the localStorage for testing environment
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    };
    global.localStorage = localStorageMock;
  });


  beforeEach(async () =>
    await waitFor(async () => render(
      <QueryProvider>
        <CityContainer />
      </QueryProvider>
    )
  ))

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("renders City Container component and its child component correctly when data is loaded", async () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: mockCitiesData,
      error: undefined,
      isLoading: false,
      isError: false
    });

    await waitFor(() => {
      const cityContainer = screen.getByTestId("city-container");
      const housesListContainer = screen.getByTestId("houses-list-container");
      const housesContainer = screen.getByTestId("houses-container");

      expect(cityContainer).toBeInTheDocument();
      expect(cityContainer).toHaveClass("w-full");

      // Render two childs
      expect(cityContainer).toContainElement(housesListContainer);
      expect(cityContainer).toContainElement(housesContainer);
    });
  });
});

/**
 * Current ERROR:
 * app/_components/container/city-container/__tests__/city-container.test.tsx
  ● Test suite failed to run

    TypeError: _reactquery.QueryClient is not a constructor

      1 | import { QueryClient } from "@tanstack/react-query";
    > 2 | export const queryClient = new QueryClient({
        |                            ^
      3 |   defaultOptions: {
      4 |     queries: {
      5 |       staleTime: 1000 * 60 * 60 * 24

      at Object.<anonymous> (app/libs/react-query.ts:2:28)
      at Object.<anonymous> (app/_components/container/query-provider.tsx:16:21)
      at Object.<anonymous> (app/_components/container/city-container/__tests__/city-container.test.tsx:10:63)
 */
