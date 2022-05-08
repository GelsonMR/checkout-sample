import styled from 'styled-components'

export const H4 = styled.h4`
  font-family: ${props => props.theme.fontFamily};
  font-size: 20px;
  font-weight: 400;
`

export const Body = styled.span`
  font-family: ${props => props.theme.fontFamily};
  font-size: 16px;
  font-weight: 400;
`

export const Body2 = styled(Body)`
  font-size: 14px;
`

export const Footnote = styled(Body)`
  font-size: 12px;
`

export default H4
