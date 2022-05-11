import styled from 'styled-components'
import { devices } from '../utils'

const Page = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  padding: 0 20px 20px;


  @media ${devices.mediaQueries.tablet} {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 40px;
  }
`

export default Page
