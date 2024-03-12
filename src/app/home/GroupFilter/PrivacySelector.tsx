import { ChangeEventHandler, useCallback } from "react"

import { FormItem, Select } from "@vkontakte/vkui"

import { useAppDispatch, useAppSelector } from "@/store"
import { setPrivacy } from "@/store/slices/filters"
import { Privacy } from "@/store/slices/filters/types"

interface Option {
  label: string
  value: Privacy
}

const options: Option[] = [
  { label: "Все", value: "all" },
  { label: "Публичные", value: "public" },
  { label: "Приватные", value: "private" },
]

export default function PrivacySelector() {
  const dispatch = useAppDispatch()

  const privacy = useAppSelector(({ filters }) => filters.privacy)

  const handleChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    ({ currentTarget }) => {
      dispatch(setPrivacy(currentTarget.value as Privacy))
    },
    [dispatch]
  )

  return (
    <FormItem top="Приватность">
      <Select options={options} value={privacy} onChange={handleChange} />
    </FormItem>
  )
}
