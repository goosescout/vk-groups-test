import styled from "styled-components"

interface GroupAvatarProps {
  avatarColor: string | undefined
}

export default function GroupAvatar({ avatarColor }: GroupAvatarProps) {
  return <Wrapper $color={avatarColor} />
}

const Wrapper = styled.div<{ $color: string | undefined }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  background-color: ${({ $color }) => $color ?? "transparent"};
  border: ${({ $color }) =>
    $color ? "1px solid var(--color-border)" : "none"};
`
