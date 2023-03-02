import type { AppProps } from 'next/app'

import '../styles/css/colors.css'

import { ThemeProvider } from 'styled-components';
import * as theme from '../styles/json/colors.json';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
