import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'

import { offers, theme } from '../../mocks'
import { SubscriptionContext, SubscriptionContextProvider } from '../../context/SubscriptionContext'
import Success from './index'
import { OffersContext } from '../../context/OffersContext'

const routerPush = jest.fn()

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: routerPush,
    }
  },
}))

it('renders goes to home if no subscription', async () => {
  render(
    <SubscriptionContextProvider>
      <ThemeProvider theme={theme}>
        <Success />
      </ThemeProvider>
    </SubscriptionContextProvider>
  )

  expect(routerPush.mock.calls[0][0]).toBe('/')
})

it('renders goes to home if no subscription', async () => {
  render(
    <SubscriptionContext.Provider value={{ subscription: { fullPrice: 0, discountAmmount: 0, title: '', description: '', creditCardCPF: '03993241002' } }}>
      <OffersContext.Provider value={{ selectedOffer: { fullPrice: 0, discountAmmount: 0 } }}>
        <ThemeProvider theme={theme}>
          <Success />
        </ThemeProvider>
      </OffersContext.Provider>
    </SubscriptionContext.Provider>
  )

  expect(routerPush.mock.calls[0][0]).toBe('/')
})
 