import { Div, FormLayoutGroup } from "@vkontakte/vkui"
import styled from "styled-components"

import ColorSelector from "./ColorSelector"
import HasFriendsSelector from "./HasFriendsSelector"
import PrivacySelector from "./PrivacySelector"

import { text16Medium } from "@/utils/fonts"

export default function GroupsFilter() {
  return (
    <Div>
      <Header>Фильтры</Header>
      <FormLayoutGroup mode="horizontal">
        <PrivacySelector />
        <ColorSelector />
        <HasFriendsSelector />
      </FormLayoutGroup>
    </Div>
  )
}

const Header = styled.h2`
  ${text16Medium};
  color: var(--color-secondary-text);
  padding: 0 16px;
`
