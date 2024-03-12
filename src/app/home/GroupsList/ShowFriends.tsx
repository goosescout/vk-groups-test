import { useMemo } from "react"

import { Popover, Button, SimpleCell } from "@vkontakte/vkui"

import { User } from "@/store/api/groups/types"

interface ShowFriendsProps {
  friends: User[]
}

export default function ShowFriends({ friends }: ShowFriendsProps) {
  const content = useMemo(
    () =>
      friends.map((friend, index) => (
        <SimpleCell key={index}>
          {friend.first_name} {friend.last_name}
        </SimpleCell>
      )),
    [friends]
  )

  return (
    <Popover trigger="click" content={content}>
      <Button mode="link">Показать друзей ({friends.length})</Button>
    </Popover>
  )
}
