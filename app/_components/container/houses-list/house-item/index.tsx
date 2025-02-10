import React from "react"

import Container from "@/app/_components/container"
import InputText from "@/app/_components/ui/input-text"
import ColorPicker from "@/app/_components/container/color-picker"
import FloorSlider from "@/app/_components/container/floor-slider"
import Button from "@/app/_components/ui/button"
import TrashcanIcon from "@/app/_components/icons/trashcan"

import { THouseItemProps } from "@/app/_components/container/houses-list/house-item/type"

const HouseItem = React.memo<THouseItemProps>(({ house, updateHouse, handleDeleteHouse }) => {
  if (!house) return null
  return (
    <Container>
      <Container className="px-4 flex flex-row items-start justify-between my-2">
        <InputText
          text={house.name}
          cb={(newHouseName) => updateHouse(house.id as string, (h) => ({ ...h, name: newHouseName }))}
          className="w-[150px] md:w-[30%] px-4 py-2"
        />
        <Button
          type="button"
          icon={<TrashcanIcon />}
          cb={() => handleDeleteHouse(house.id as string)}
          className="p-1 bg-white"
        />
      </Container>
      <Container className="w-full md:w-[90%] px-5 flex flex-col md:flex-row items-start justify-between">
        <FloorSlider
          floors={house.floors}
          cb={(newFloorCount) => updateHouse(house.id as string, (h) => ({ ...h, floors: newFloorCount }))}
        />
        <ColorPicker
          color={house.color}
          cb={(newColor) => updateHouse(house.id as string, (h) => ({ ...h, color: newColor }))}
        />
      </Container>
    </Container>
  );
}, (prevProps, nextProps) => {
  const isSame = prevProps.house.name === nextProps.house.name &&
                 prevProps.house.floors === nextProps.house.floors &&
                 prevProps.house.color === nextProps.house.color

  if (!isSame) {
    // Using prevProps for displaying house id only
    console.log(`Re-rendering HousesList -> HouseItem: ${prevProps.house.id} due to changes`);
  }

  return isSame
})

HouseItem.displayName = "HouseItem"
export default HouseItem
