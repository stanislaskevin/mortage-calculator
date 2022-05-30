import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    text-align:center;
    max-width: 900px;
    margin: 0 auto;
    padding:1rem;
`;

const Header = () => {
  return (
    <Container>
        <h1>Calculez vos mensualités</h1>
        <p>Calculer rapidement le montant de vos mensualités de remboursement
         de votre investissement locatif. Vous retrouverez en détails le montant du remboursement
         dû à votre emprunt ainsi que le coût des intérêts.</p>
    </Container>
  )
}

export default Header