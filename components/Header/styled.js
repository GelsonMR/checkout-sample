import styled, { css, keyframes } from 'styled-components'
import { devices } from '../../utils'

export const Container = styled.header`
  position: sticky;
  top: 0;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  z-index: 1;

  @media ${devices.mediaQueries.mobileL} {
    height: 92px;
  }
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
  left: 8px;
  bottom: 0;
  margin: auto;

  @media ${devices.mediaQueries.mobileL} {
    left: 52px;
  }
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
