import React from 'react'
import styled from 'styled-components'

const SocialStyled = styled.div`
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 1024px) {
    a {
      margin-left: 2em;
    }
    a:first-child {
      margin-left: 0;
    }
  }
`

function Social() {
  return (
    <SocialStyled>
    
    </SocialStyled>
  )
}

export default Social
