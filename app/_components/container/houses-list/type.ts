import { TCities } from "@/app/service/type"

export type THousesListProps = {
  city: TCities
}

export type THouse = {
  id?: string
  name: string
  floors: number
  color: string
}
