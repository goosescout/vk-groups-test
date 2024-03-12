import { ChangeEventHandler, useCallback, useMemo } from "react"

import { FormItem, Select } from "@vkontakte/vkui"

import { useAppDispatch, useAppSelector } from "@/store"
import { useGetGroupsQuery } from "@/store/api/groups"
import { setAvatarColor } from "@/store/slices/filters"

export default function ColorSelector() {
  const dispatch = useAppDispatch()

  const avatarColor = useAppSelector(({ filters }) => filters.avatarColor)

  const { data: { data: groups } = {} } = useGetGroupsQuery()

  const colors = useMemo(() => {
    if (!groups) return []

    const colors = new Set<{
      label: string
      value: string
    }>([
      {
        label: "Все",
        value: "all",
      },
    ])

    groups.map(group => {
      if (group.avatar_color)
        colors.add({ label: group.avatar_color, value: group.avatar_color })
      else colors.add({ label: "Без цвета", value: "no_color" })
    })

    return Array.from(colors)
  }, [groups])

  const handleChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    ({ currentTarget }) => {
      dispatch(setAvatarColor(currentTarget.value))
    },
    [dispatch]
  )

  return (
    <FormItem top="Цвет аватарки">
      <Select options={colors} value={avatarColor} onChange={handleChange} />
    </FormItem>
  )
}
