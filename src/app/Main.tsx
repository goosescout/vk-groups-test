import styled from "styled-components"

import { header36 } from "@/utils/fonts"

export default function Main() {
  return (
    <Wrapper>
      <Header>Группы</Header>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 32px;
  background-color: var(--color-white);

  padding: 24px;

  margin: 24px auto 0;
  width: 80vw;
`

const Header = styled.h1`
  ${header36};
`
