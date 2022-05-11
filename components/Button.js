import styled from 'styled-components'
import * as Typography from './Typography'

const Button = styled(Typography.Body2).attrs({ as: 'button' })`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  height: 50px;
  color: ${props => props.text ? props.theme.colors.primary : '#FFF'};
  background-color: ${props => props.text ? 'transparent' : props.theme.colors.primary};
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    background-color: ${props => props.theme.colors.gray4};
  }

`


export default Button
