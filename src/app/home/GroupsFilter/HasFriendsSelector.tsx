import { ChangeEventHandler, useCallback } from "react"

import { FormItem, Select } from "@vkontakte/vkui"

import { useAppDispatch, useAppSelector } from "@/store"
import { setHasFriends } from "@/store/slices/filters"

const options = [
  { label: "Все", value: "all" },
  { label: "Есть друзья", value: Boolean(true).toString() },
  { label: "Нет друзей", value: Boolean(false).toString() },
]

export default function HasFriendsSelector() {
  const dispatch = useAppDispatch()

  const hasFriends = useAppSelector(({ filters }) => filters.hasFriends)

  const handleChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    ({ currentTarget }) => {
      dispatch(
        setHasFriends(
          currentTarget.value === "all"
            ? "all"
            : currentTarget.value === Boolean(true).toString()
        )
      )
    },
    [dispatch]
  )

  const value = hasFriends === "all" ? "all" : hasFriends.toString()

  return (
    <FormItem top="Наличие друзей">
      <Select options={options} value={value} onChange={handleChange} />
    </FormItem>
  )
}
