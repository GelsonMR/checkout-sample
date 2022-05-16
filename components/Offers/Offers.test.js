import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import { OffersContext, OffersContextProvider } from '../../context/OffersContext'
import { offers, theme } from '../../mocks'
import Offers from './index'
import user from '@testing-library/user-event'

it('renders offers with 2 items', async () => {
  render(
    <OffersContextProvider>
      <ThemeProvider theme={theme}>
        <Offers />
      </ThemeProvider>
    </OffersContextProvider>
  )

  const container = screen.getByText(/Confira seu plano/)

  expect(container).toBeInTheDocument()
})

it('renders offers with 2 items', async () => {
  render(
    <OffersContext.Provider value={{ offers, selectedOffer: offers[0] }}>
      <ThemeProvider theme={theme}>
        <Offers />
      </ThemeProvider>
    </OffersContext.Provider>
  )

  const container = screen.getAllByText(/Premium Anual/)

  expect(container).toHaveLength(2)
})

it('installments select hide', async () => {
  render(
    <OffersContext.Provider value={{ offers, selectedOffer: offers[0] }}>
      <ThemeProvider theme={theme}>
        <Offers />
      </ThemeProvider>
    </OffersContext.Provider>,
  )

  user.click(screen.getByText(/À Vista/))

  expect(screen.queryByText(/Número de parcelas/)).not.toBeInTheDocument()
})
