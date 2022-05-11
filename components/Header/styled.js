import styled, { css, keyframes } from 'styled-components'

export const Container = styled.header`
  position: sticky;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IconButton = styled.a`
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  top: 0;
  left: 52px;
  bottom: 0;
  margin: auto;
`

const blinking = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`

const animation = css`
  animation: ${blinking} 1s infinite normal ease-in;
`

export const Logo = styled.div`
  width: 42px;
  height: 29px;
  ${props => props.$loading ? animation : ''};

`
