import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import { OffersContext } from '../../context/OffersContext'
import Home from '../../pages/index'

it('renders home with error', async () => {
  render(
    <OffersContext.Provider value={{ error: true }}>
      <Home />
    </OffersContext.Provider>
  )

  expect(await screen.findByText('Erro ao carregar planos')).toBeInTheDocument()
})
 