import { Panel, FormLayoutGroup } from "@vkontakte/vkui"
import styled from "styled-components"

import ColorSelector from "./ColorSelector"
import HasFriendsSelector from "./HasFriendsSelector"
import PrivacySelector from "./PrivacySelector"

import { text16Medium } from "@/utils/fonts"

export default function GroupsFilter() {
  return (
    <Panel>
      <Header>Фильтры:</Header>
      <FormLayoutGroup mode="horizontal">
        <PrivacySelector />
        <ColorSelector />
        <HasFriendsSelector />
      </FormLayoutGroup>
    </Panel>
  )
}

const Header = styled.h2`
  ${text16Medium};
  color: var(--color-secondary-text);
`
