import styled from 'styled-components'
import * as Typography from '../Typography'

export const Container = styled.header`
  width: 330px;
`

export const Heading = styled(Typography.H4)`
  margin-bottom: 8px;
  color: ${props => props.theme.colors.black};
`

export const Hint = styled(Typography.Body)`
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
