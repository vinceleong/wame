import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <meta
            name="google-site-verification"
            content="ISq8IpU9RM48UUBfTdITLF_rYefjUWwWP_bUwsgwJXs"
          />
          <meta name="application-name" content="Wame" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Wame" />
          <meta
            name="description"
            content="Open Whatsapp chat without adding contact"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" href="/icons/wame-180.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/wame-152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/wame-180.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icons/wame-167.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/icons/wame-120.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/wame-32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/wame-16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          {/* <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#5bbad5"
          /> */}
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />

          <meta
            name="twitter:card"
            content="Open Whatsapp chat without adding contact"
          />
          <meta name="twitter:url" content="https://wameapp.vercel.app" />
          <meta name="twitter:title" content="Wame" />
          <meta
            name="twitter:description"
            content="Open Whatsapp chat without adding contact"
          />
          <meta
            name="twitter:image"
            content="https://wameapp.vercel.app/icons/wame-192.png"
          />
          <meta name="twitter:creator" content="@vteneleven" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Wame" />
          <meta
            property="og:description"
            content="Open Whatsapp chat without adding contact"
          />
          <meta property="og:site_name" content="Wame" />
          <meta property="og:url" content="https://wameapp.vercel.app" />
          <meta
            property="og:image"
            content="https://yourdomain.com/icons/wame-180.png"
          />
          {/* <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_2048.png"
            sizes="2048x2732"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_1668.png"
            sizes="1668x2224"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_1536.png"
            sizes="1536x2048"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_1125.png"
            sizes="1125x2436"
          /> */}
          {/* <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_1242.png"
            sizes="1242x2208"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_750.png"
            sizes="750x1334"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_640.png"
            sizes="640x1136"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
