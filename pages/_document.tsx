import { Html, Head, Main, NextScript } from 'next/document';
import { styled } from '@mui/material/styles';

const Body = styled('body')(({}) => ({
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  backgroundColor: '#95ded7',
  fontFamily: 'Roboto, sans-serif',
}));

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body>
        <Main />
        <NextScript />
      </Body>
    </Html>
  );
}
