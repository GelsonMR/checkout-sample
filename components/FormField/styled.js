import styled from 'styled-components'
import * as Typography from '../Typography'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Field = styled(Typography.Body)`
  display: flex;
  width: 100%;
  height: 30px;
  outline: 0;
  color: ${props => props.theme.colors.black};
  border-bottom: 1px solid ${props => props.theme.colors.gray1};

  &:focus {
    border-color: ${props => props.theme.colors.black};
  }

  &::placeholder {
    color: ${props => props.theme.colors.gray3};
  }
`

export const Label = styled(Typography.Footnote).attrs({
  as: 'label'
})`
  color: ${props => props.error ? props.theme.colors.error : props.theme.colors.gray4};

  ${Field} {
    ${props => props.error ? ('border-color: ' + props.theme.colors.error) : ''};
  }
`

export const Error = styled(Typography.Footnote)`
  color: ${props => props.theme.colors.error};
`
