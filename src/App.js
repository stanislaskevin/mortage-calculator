import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import FormContainer from './components/FormContainer'
import Footer from './components/Footer'

const Container = styled.div``;

const App = () => {
  return (
    <>
      <Header />
      <FormContainer />
      <Footer />
    </>
  )
}

export default App