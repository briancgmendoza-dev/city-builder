import React from "react"

import Triangle from "@/app/_components/house/triangle"
import Floors from "@/app/_components/house/floors"
import Windows from "@/app/_components/house/windows"
import Door from "@/app/_components/house/door"

import { THouseProps } from "@/app/_components/container/houses-container/house/type"

const House = React.memo<THouseProps>(({ house }) => {
  if (!house) return null
  const floorsArray = Array.from({ length: house.floors });
  return (
    <div className="mx-4">
      <Triangle />
      {floorsArray.map((_, index) => {
        const isLastFloor = index === floorsArray.length - 1;
        return (
          <div key={index}>
            {isLastFloor ? (
              <Floors color={house.color} floorsClassName={`${floorsArray.length === 1 ? "pt-6" : "pt-2"} flex px-1.5`}>
                <Windows number_of_windows={1} />
                <Door />
              </Floors>
            ) : (
              <Floors color={house.color}>
                <Windows number_of_windows={2} parentWindowsContainerClassName="flex items-center justify-evenly py-4" />
              </Floors>
            )}
          </div>
        );
      })}
    </div>
  );
}, (prevProps, nextProps) => {
  const { id, floors: prevFloors, color: prevColor } = prevProps.house;
  const { floors: nextFloors, color: nextColor } = nextProps.house;

  if (prevFloors !== nextFloors) {
    console.log(`Re-rendering House with ${id} -> number of floors from ${prevFloors} to ${nextFloors}`);
    return false;
  }

  if (prevColor !== nextColor) {
    console.log(`Re-rendering House with ${id} -> color from ${prevColor} to ${nextColor}`);
    return false;
  }

  return true;
})

House.displayName = "House"
export default House
