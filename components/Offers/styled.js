import styled from 'styled-components'
import * as Typography from '../Typography'

export const Heading = styled(Typography.H4)`
  margin-bottom: 8px;
  color: ${props => props.theme.colors.black};
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 30px;
  grid-column-gap: 50px;

  > * {
    grid-column: 1 / 3;
  }
`

export const Email = styled(Typography.Footnote)`
  height: 24px;
  padding: 0 12px;
  display: inline-flex;
  margin-bottom: 30px;
  border-radius: 12px;
  align-items: center;
  color: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.gray1};
`

export const Offer = styled(Typography.Footnote).attrs({ as: 'li' })`
  position: relative;
  display: grid;
  row-gap: 4px;
  padding: 20px;
  border: 1px solid ${props => props.theme.colors.primary};
  padding-right: 36px;
  border-radius: 15px;
  cursor: pointer;

  & + & {
    margin-top: 12px;
  }
`

export const Title = styled(Typography.Body2).attrs({ as: 'div' })`
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
`

export const Caption = styled(Typography.Footnote)`
  display: flex;
  color: ${props => props.theme.colors.primary};
`

export const DiscountTag = styled(Typography.Footnote)`
  font-size: 10px;
  height: 16px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  color: #FFF;
  background-color: ${props => props.theme.colors.secondary};
  margin-left: 12px;
  border-radius: 8px;
`

export const Installments = styled(Typography.Footnote)`
  font-size: 10px;
  color: ${props => props.theme.colors.secondary};
`

export const RadioButton = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
  bottom: 0;
  width: 16px;
  height: 16px;
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme.colors.gray3};
  border-radius: 8px;

  ${props => props.checked && `
    &::before {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background-color: ${props.theme.colors.primary};
    }
  `}
`

export const Info = styled(Typography.Footnote).attrs({ as: 'div' })`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.black};
  margin-top: 30px;
  cursor: default;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  margin-left: 12px;
`
