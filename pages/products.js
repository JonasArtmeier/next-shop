import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function Products() {
  return (
    <div className="container">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-W2J294T');`,
          }}
        ></script>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=UA-169796110-1`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-169796110-1', {
                      page_path: window.location.pathname,
                    });
                  `,
          }}
        />
        <title>Jo's Shop</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <Header />
      <main>
        <div>
          <Link href="/boys">
            <img
              alt="male-biker"
              className="male-biker"
              src="male-biker.png"
            ></img>
          </Link>
          <Link href="/girls">
            <img
              alt="girl-biker"
              className="girl-biker"
              src="girl-bike.png"
            ></img>
          </Link>
        </div>
      </main>
      <Footer />
      <style jsx>
        {`
          .container {
          }

          main {
            margin-top: 100px;
          }
          .male-biker {
            top: 240px;
            left: 1000px;
            width: 20%;
            display: flex;
            align-items: left;
            border-radius: 25%;
          }
          .girl-biker {
            top: 850px;
            left: 550px;
            width: 20%;
            display: flex;

            justify-content: left;
            border-radius: 25%;
          }
        `}
      </style>
      <style jsx global>{`
        html,
        body {
          margin-top: 0;
          margin-left: 0;
          background-color: white;
        }
      `}</style>
    </div>
  );
}
