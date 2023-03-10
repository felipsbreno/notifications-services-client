import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
