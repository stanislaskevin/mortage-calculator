import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    justify-content: center;
    
    span {
        position: absolute;
        bottom:0;
    }   
`; 

const Footer = () => {
  return (
    <Container>
        <span>Construit avec ❤️ par stan_codes</span>
    </Container>
  )
}

export default Footer