import { THouse } from "@/app/_components/container/houses-list/type"

export type THouseItemProps = {
  house: THouse
  updateHouse: (houseId: string, updateFn: (house: THouse) => THouse | null) => void
  handleDeleteHouse: (houseId: string) => void
}
