import React from "react";

import Container from "@/app/_components/container";
import House from "@/app/_components/container/houses-container/house"
import { THousesContainerProps,  } from "@/app/_components/container/houses-container/type";

const HousesContainer = React.memo<THousesContainerProps>(({ house }) => {
  if (house.length === 0) return null
  return (
    <Container type="section" className="flex items-center justify-evenly mt-10 md:mt-0 sm:mt-4" dataTestId="houses-container">
      HousesContainer
      {/* {house.length > 0 ? house.map((h) => <House key={h.id} house={h} />) : null} */}
    </Container>
  );
}, (prevProps, nextProps) => {
  const isSame = prevProps.house === nextProps.house

  if (!isSame) {
    // Using prevProps for displaying cityName
    console.log(`Re-rendering ${prevProps.cityName} House Container due to house update`)
  }

  return isSame
});

HousesContainer.displayName = "HousesContainer";
export default React.memo(HousesContainer);
