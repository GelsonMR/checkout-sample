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
    primary: '#0070f3',
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
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
