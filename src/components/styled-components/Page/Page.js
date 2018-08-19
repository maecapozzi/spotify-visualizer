import styled from 'styled-components'

const PageContainer = styled.div`
  background-color: #2C3134;
  height: 100%
  left: 0; 
  
  text-align: center;
  top: 0; 
  width: 100%; 
`

const Page = styled.div`
  @media (min-width: 700px) {
    padding: 5em 33%;
  }
`

export { PageContainer, Page }
