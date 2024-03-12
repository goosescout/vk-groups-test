import { SimpleCell } from "@vkontakte/vkui"

import GroupAvatar from "./GroupAvatar"
import ShowFriends from "./ShowFriends"

import { Group } from "@/store/api/groups/types"

interface GroupItemProps extends Group {}

export default function GroupItem({
  name,
  closed,
  avatar_color: avatarColor,
  members_count: membersCount,
  friends = [],
}: GroupItemProps) {
  const subtitle = `${closed ? "Приватная" : "Публичная"}, ${membersCount} ${getCountCase(membersCount)}`
  const after = friends.length ? <ShowFriends friends={friends} /> : null

  return (
    <SimpleCell
      before={<GroupAvatar avatarColor={avatarColor} />}
      subtitle={subtitle}
      after={after}
    >
      {name}
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
