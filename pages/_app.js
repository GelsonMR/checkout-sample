import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { OffersContextProvider } from '../context/OffersContext'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  fontFamily: 'DM Sans, sans-serif',
  colors: {
    primary: '#191847',
    secondary: '#F5850B',
    error: '#d32f2f',
    black: '#151516',
    gray1: '#F4F3F6',
    gray2: '#E1DEE8',
    gray3: '#C9C5D4',
    gray4: '#666173',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Checkout Whitebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <OffersContextProvider>
          <Component {...pageProps} />
        </OffersContextProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
