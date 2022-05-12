import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import { OffersContext } from '../context/OffersContext'
import Home from '../pages/index'

const mockTheme = { colors: {} }

it('renders home', () => {
  const { container } = render(
    <ThemeProvider theme={mockTheme}>
      <Home />
    </ThemeProvider>
  )
  expect(container).toMatchSnapshot()
})

it('renders home with error', async () => {
  render(
    <OffersContext.Provider value={{ error: true }}>
      <ThemeProvider theme={mockTheme}>
        <Home />
      </ThemeProvider>
    </OffersContext.Provider>
  )

  expect(await screen.findByText('Erro ao carregar planos')).toBeInTheDocument()
})
