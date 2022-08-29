import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { SessionProvider } from 'next-auth/react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import { lightTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <SessionProvider>
      <ThemeProvider theme={lightTheme}>
        <SnackbarProvider maxSnack={3}>
          <CssBaseline />
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    // </SessionProvider>
  )

}

export default MyApp
