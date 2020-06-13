import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="natacha romano | portfolio" />
          <meta property="og:description" content="front-end developer, software engineer, css specialist and web designer." />
          <meta property="og:url" content="https://romanonatacha.github.io" />
          <meta property="og:image" content="/images/thumbnail2.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="627" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="https://romanonatacha.github.io" />
          <meta name="twitter:title" content="natacha romano | portfolio" />
          <meta name="twitter:description" content="front-end developer, software engineer, css specialist and web designer." />
          <meta name="twitter:image" content="/images/thumbnail.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument