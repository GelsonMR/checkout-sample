import styled from 'styled-components'
import { devices } from '../../utils'
import * as Typography from '../Typography'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  max-width: 100%;
`

export const Congratulations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Check = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 2px solid ${props => props.theme.colors.gray1};
  margin-bottom: 18px;
  `

export const Heading = styled(Typography.H4)`
  color: ${props => props.theme.colors.black};
  margin-bottom: 12px;
`

export const Description = styled(Typography.Body).attrs({ as: 'p' })`
  text-align: center;
  color: ${props => props.theme.colors.gray3};
  margin-bottom: 32px;

  @media ${devices.mediaQueries.tablet} {
    margin-bottom: 56px;
  }
`

export const Card = styled.div`
  padding: 16px 16px 24px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  text-align: right;  
  margin-bottom: 40px;

  @media ${devices.mediaQueries.tablet} {
    margin-bottom: 88px;
  }
`

export const Highlight = styled.div`
  position: relative;
  padding: 16px 20px 18px 72px;
  border-radius: 15px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.gray1};
`

export const Star = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
  bottom: 0;
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.gray2};
`

export const Primary = styled(Typography.Body).attrs({ as: 'div' })`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 8px;
`

export const Secondary = styled(Typography.Body2).attrs({ as: 'div' })`
  color: ${props => props.theme.colors.primary};
`

export const Field = styled(Typography.Body2).attrs({ as: 'div' })`
  display: flex;
  color: ${props => props.theme.colors.gray3};
  margin: 0 10px;

  & + & {
    margin-top: 26px;
  }
`

export const Value = styled(Typography.Body2)`
  color: ${props => props.theme.colors.black};
  margin-left: auto;
`
