import { useMemo, useState } from "react"

import { SimpleCell, Button, Text, Title } from "@vkontakte/vkui"

import GroupAvatar from "./GroupAvatar"

import { Group } from "@/store/api/groups/types"

interface GroupItemProps extends Group {}

export default function GroupItem({
  name,
  closed,
  avatar_color: avatarColor,
  members_count: membersCount,
  friends = [],
}: GroupItemProps) {
  const [isShowingFriends, setIsShowingFriends] = useState(false)

  const handleClick = () => setIsShowingFriends(prev => !prev)

  const friendsString = useMemo(
    () =>
      "Друзья: " +
      friends
        .map(({ first_name, last_name }) => `${first_name} ${last_name}`)
        .join(", "),
    [friends]
  )

  const Subtitle = `${closed ? "Приватная" : "Публичная"}, ${membersCount} ${getCountCase(membersCount)}`
  const After = friends.length ? (
    <Button mode="link" onClick={handleClick}>
      {isShowingFriends ? "Скрыть" : "Показать"} друзей ({friends.length})
    </Button>
  ) : null

  return (
    <SimpleCell
      multiline
      before={<GroupAvatar avatarColor={avatarColor} />}
      subtitle={Subtitle}
      after={After}
    >
      <Title level="3">{name}</Title>
      {isShowingFriends && <Text>{friendsString}</Text>}
    </SimpleCell>
  )
}

function getCountCase(count: number) {
  const lastTwoDigits = count % 100
  const lastDigit = count % 10

  if (lastTwoDigits >= 11 && lastTwoDigits <= 20) return "участников"
  if (lastDigit === 1) return "участник"
  if (lastDigit >= 2 && lastDigit <= 4) return "участника"
  return "участников"
}
