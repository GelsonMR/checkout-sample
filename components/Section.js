import styled from 'styled-components'
import { devices } from '../utils'

const Section = styled.div`
  flex: 0 1 auto;
  width: 330px;
  max-width: 100%;

  & + & {
    margin-bottom: 40px;
  }

  @media ${devices.mediaQueries.tablet} {
    & + & {
      margin-left: 20px;
      margin-bottom: 0;
    }
  }

  @media ${devices.mediaQueries.laptop} {
    & + & {
      margin-left: 210px;
    }
  }
`

export default Section
