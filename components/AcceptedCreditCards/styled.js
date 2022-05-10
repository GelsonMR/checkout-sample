import styled from 'styled-components'
import * as Typography from '../Typography'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`

export const CardsList = styled.div`
  display: flex;

  & > *:not(:first-child) {
    margin-left: 12px;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 32px;
`

export const PoweredBy = styled(Typography.Body)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.gray2};
  font-size: 10px;
  margin-top: 14px;
`

export const Logo = styled.div`
  margin-left: 8px;
  width: 29px;
  height: 11px;
`
