import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#191847',
    secondary: '#F5850B',
    black: '#151516',
    gray1: '#F4F3F6',
    gray1: '#E1DEE8',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
