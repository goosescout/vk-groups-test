import { useMemo } from "react"

import { Group as GroupWrapper, Text } from "@vkontakte/vkui"

import GroupItem from "@/home/GroupsList/GroupItem"
import { useAppSelector } from "@/store"
import { useGetGroupsQuery } from "@/store/api/groups"
import { Group } from "@/store/api/groups/types"
import { Privacy } from "@/store/slices/filters/types"

export default function GroupsFilter() {
  const { privacy, avatarColor, hasFriends } = useAppSelector(
    ({ filters }) => filters
  )

  const { data: { data: groups } = {} } = useGetGroupsQuery()

  const filteredGroups = useMemo(() => {
    if (!groups) return []

    return groups.filter(
      group =>
        privacyFilter(group, privacy) &&
        avatarColorFilter(group, avatarColor) &&
        hasFriendsFilter(group, hasFriends)
    )
  }, [avatarColor, groups, hasFriends, privacy])

  if (!groups) return null

  return (
    <GroupWrapper mode="plain">
      {filteredGroups.length === 0 && <Text>Нет групп</Text>}
      {filteredGroups.map(group => (
        <GroupItem key={group.id} {...group} />
      ))}
    </GroupWrapper>
  )
}

const privacyFilter = (group: Group, privacy: Privacy) => {
  if (privacy === "all") return true
  return group.closed !== (privacy === "private")
}

const avatarColorFilter = (group: Group, avatarColor: string) => {
  if (avatarColor === "all") return true
  if (!group.avatar_color && avatarColor === "no_color") return true
  return group.avatar_color === avatarColor
}

const hasFriendsFilter = (group: Group, hasFriends: boolean | "all") => {
  if (hasFriends === "all") return true
  if (hasFriends && group.friends?.length) return true
  if (!hasFriends && !group.friends?.length) return true
  return false
}
