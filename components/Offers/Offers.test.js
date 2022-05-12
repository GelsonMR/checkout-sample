import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
import { render, screen, fireEvent, getByText } from '@testing-library/react'
import { OffersContext, OffersContextProvider } from '../../context/OffersContext'
import Offers from './index'

const mockTheme = { colors: {} }

it('renders offers', () => {
  const { container } = render(
    <ThemeProvider theme={mockTheme}>
      <Offers />
    </ThemeProvider>
  )
  expect(container).toMatchSnapshot()
})

const mockOffers =     [
  {
    "id":32,
    "storeId":"anual_parcelado_iugu",
    "title":"Premium Anual",
    "description":"Parcelado",
    "caption":"7 Dias Grátis",
    "fullPrice":600,
    "discountAmmount":60,
    "discountPercentage":0.1,
    "periodLabel":"mês",
    "period":"annually",
    "discountCouponCode":null,
    "order":1,
    "priority":1,
    "gateway":"iugu",
    "splittable":true,
    "installments":12,
    "acceptsCoupon":true
  },
  {
    "id":33,
    "storeId":"anual_a_vista_iugu",
    "title":"Premium Anual",
    "description":"À Vista",
    "caption":"7 Dias Grátis",
    "fullPrice":7200,
    "discountAmmount":720,
    "discountPercentage":0.1,
    "periodLabel":"ano",
    "period":"annually",
    "discountCouponCode":null,
    "order":2,
    "priority":2,
    "gateway":"iugu",
    "splittable":false,
    "installments":1,
    "acceptsCoupon":true
  }
]

it('renders home with 2 offers', async () => {
  render(
    <OffersContext.Provider value={{ offers: mockOffers, selectedOffer: mockOffers[0] }}>
      <ThemeProvider theme={mockTheme}>
        <Offers />
      </ThemeProvider>
    </OffersContext.Provider>
  )

  const container = document.querySelector('li')

  expect(container).toHaveLength(2)
})

it('changes selected offer', async () => {
  render(
    <OffersContext.Provider value={{ offers: mockOffers, selectedOffer: mockOffers[0] }}>
      <ThemeProvider theme={mockTheme}>
        <Offers />
      </ThemeProvider>
    </OffersContext.Provider>
  )
  
  const container = document.querySelector('li + li')
  
  fireEvent(
    container,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  )

  expect(container).toBe(1)
})
