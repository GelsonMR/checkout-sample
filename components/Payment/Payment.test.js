import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'

import { OffersContext } from '../../context/OffersContext'
import { offers, theme } from '../../mocks'
import Payment from './index'
import user from '@testing-library/user-event'
import { SubscriptionContext } from '../../context/SubscriptionContext'

const routerPush = jest.fn()

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: routerPush,
    }
  },
}))

describe('Payment component', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('card number type', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Payment />
      </ThemeProvider>
    ) 

    const input = screen.getByLabelText(/Número do cartão/)

    await user.type(input, '0000000000000000')

    expect(input).toHaveValue('0000 0000 0000 0000')
  })

  it('card expiration invalid date', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Payment />
      </ThemeProvider>
    ) 

    const input = screen.getByLabelText(/Validade/)

    await user.type(input, '1322')
    await user.click(screen.getByRole('button'))

    const error = await screen.findByText(/Use uma data válida/)

    expect(error).toBeInTheDocument()
  })

  it('card expiration type', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Payment />
      </ThemeProvider>
    ) 

    const input = screen.getByLabelText(/Validade/)

    await user.type(input, '1222')

    expect(input).toHaveValue('12/22')
  })

  it('cpf type', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Payment />
      </ThemeProvider>
    ) 

    const input = screen.getByLabelText(/CPF/)

    await user.type(input, '01234567890')

    expect(input).toHaveValue('012.345.678-90')
  })

  it('coupon is hidden', async () => {
    render(
      <OffersContext.Provider value={{ selectedOffer: offers[1] }}>
        <ThemeProvider theme={theme}>
          <Payment />
        </ThemeProvider>
      </OffersContext.Provider>
    )

    expect(screen.queryByText(/Cupom/)).not.toBeInTheDocument()
  })

  it('form submit', async () => {
    render(
      <SubscriptionContext.Provider value={{ subscribe: async () => ({}) }}>
        <OffersContext.Provider value={{ selectedOffer: offers[0] }}>
          <ThemeProvider theme={theme}>
            <Payment />
          </ThemeProvider>
        </OffersContext.Provider>
      </SubscriptionContext.Provider>
    )

    await user.type(screen.getByLabelText(/Número do cartão/), '0000000000000000')
    await user.type(screen.getByLabelText(/Validade/), '1299')
    await user.type(screen.getByLabelText(/CVV/), '000')
    await user.type(screen.getByLabelText(/Nome impresso/), 'John Doe')
    await user.type(screen.getByLabelText(/CPF/), '03993241002')
    await user.selectOptions(screen.getByLabelText(/Número de parcelas/), ['3'])

    await user.click(screen.getByRole('button'))

    expect(routerPush.mock.calls[0][0]).toBe('/success')
  })

  it('form submit error', async () => {
    window.alert = jest.fn()
    const mockSubscribe = jest.fn()
    mockSubscribe.mockImplementation(async () => ({ error: true }))

    render(
      <SubscriptionContext.Provider value={{ subscribe: mockSubscribe }}>
        <OffersContext.Provider value={{ selectedOffer: offers[0] }}>
          <ThemeProvider theme={theme}>
            <Payment />
          </ThemeProvider>
        </OffersContext.Provider>
      </SubscriptionContext.Provider>
    )

    await user.type(screen.getByLabelText(/Número do cartão/), '0000000000000000')
    await user.type(screen.getByLabelText(/Validade/), '1299')
    await user.type(screen.getByLabelText(/CVV/), '000')
    await user.type(screen.getByLabelText(/Nome impresso/), 'John Doe')
    await user.type(screen.getByLabelText(/CPF/), '03993241002')
    await user.selectOptions(screen.getByLabelText(/Número de parcelas/), ['3'])

    await user.click(screen.getByRole('button'))

    expect(mockSubscribe).toBeCalled()
  })
})