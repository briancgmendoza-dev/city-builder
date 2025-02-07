# City Builder

City Builder is a React-based application that allows users to create and manage houses, design their floor plans, and visualize different weather conditions. The app includes a number of interactive components, such as color pickers, floor limit sliders, and drag-and-drop functionality, as well as integration with weather data from an external API.

## Task Breakdown

### 1. **Create a main container**
   - Create a main container that holds:
     - Title bar
     - Houses list
     - Houses design

### 2. **Create a color component**
   - Allow the user to add colors with a label and its corresponding hex value.
   - Create a `select` component for colors with a `Color:` label.

### 3. **Create a component for increasing the floor limit**
   - Create a sliding component for adjusting the floor limit with a `Floors:` label.

### 4. **Create the houses list component**
   - Display a list of all created houses.

### 5. **Create a reusable button**
   - Implement a reusable button component for:
     - "Build a new house"
     - Delete icon

### 6. **Create a modal component for building a new house**
   - Use the `Slide` component and the `Color` component inside the modal.
   - Allow the user to configure the house settings (color, floor limit, etc.) before building.

### 7. **Create a display weather component**
   - Display weather conditions using icons for Sun, Rain, and Snow.
   - Show the current temperature in the weather component.

### 8. **Implement the Query Client from React Query**
   - Implement the following functions using React Query:
     - `getHouses`: Fetch the list of all houses.
     - `addHouse`: Add a new house.
     - `deleteHouse`: Delete a house.
     - `PersistQueryClientProvider`: Implement local storage persistence for query data.
     - `getRealTimeWeather`: Use the WeatherAPI to fetch real-time weather data.

### 9. **Implement house design**
   - Design the house components with the following features:
     - **Rectangular Shape**: The body of the house should have an adjustable width based on the number of floors.
     - **Door**: Display only on the ground floor.
     - **Windows**: Two windows per floor. Use a separate container for each floor, allowing the color of windows to change.
     - **Roof**: Display only on the top floor. In the middle of the roof, display the weather component with temperature.

### 10. **Animations and Transitions**
   - Add animations and transitions to enhance the user experience while interacting with the app.

### 11. **Drag and Drop Functionality**
   - Implement drag-and-drop functionality for rearranging houses or floors.

### 12. **Unit Tests**
   - Write unit tests for each component and query function to ensure they work correctly.
   - Use a testing library such as React Testing Library and Jest.

## Getting Started

### Installation

1. Clone the repository to your local machine:

   ```js
   git clone https://github.com/briancgmendoza-dev/city-builder.git
   cd city-builder
   ```
