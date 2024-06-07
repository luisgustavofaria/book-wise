'use client'

import styled from 'styled-components'

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.gray[100]};
`

export default function Home() {
  return (
    <Container>
      <div>hello world</div>
    </Container>
  )
}
