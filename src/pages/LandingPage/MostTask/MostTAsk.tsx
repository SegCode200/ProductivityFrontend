import React from 'react'
import { styled } from 'styled-components'
import ChartPage from './ChartPage'
import Done  from './Done'


const MostTAsk = () => {
  return (
    <div>
        <Container>
        <Done/>
        </Container>
        </div>
  )
}

export default MostTAsk
const Container = styled.div`
display:flex;
width: calc(100% - 20%);
height: 500px;
padding-top: 50px;
margin-left: 260px;
`
