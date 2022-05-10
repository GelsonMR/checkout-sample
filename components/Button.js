import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  height: 50px;
  color: #FFF;
  background-color: ${props => props.theme.colors.primary};
  cursor: pointer;

  &:disabled {
    background-color: ${props => props.theme.colors.gray4};
  }
`

export default Button
