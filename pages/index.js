import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function Home() {
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
        <title>Jo's Shop</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <Header />
      <div>
        <main>
          <section>
            <h1 className="firstHeadline">
              Fixies and Singlespeed bikes for kids
            </h1>
            <div className="first-section">
              <div className="text-left">
                <div className="subHead">For Boys</div>
                <div className="description">
                  <ul>
                    <li>Sizes from 20cm</li>
                    <li>All colors</li>
                    <li>Handmade</li>
                  </ul>
                </div>
              </div>
              <Link href="/boys">
                <img className="male-biker" src="male-biker.png"></img>
              </Link>
            </div>
            <div className="second-section">
              <div className="text-right">
                <div className="subHeadRight">For Girls</div>
                <div className="descriptionright">
                  <ul>
                    <li>Sizes from 20cm</li>
                    <li>All colors</li>
                    <li>Handmade</li>
                  </ul>
                </div>
              </div>
              <Link href="/girls">
                <img className="girl-biker" src="girl-bike.png"></img>
              </Link>
              .
            </div>
          </section>
        </main>
      </div>
      <Footer />
      <style jsx>{`
        .container {
        }

        main {
          margin-top: 100px;
        }
        .firstHeadline {
          margin-top: 10px;
          font-size: 60px;
          font-family: LL Circular Bold Web, Muli, Arial, sans-serif;
          font-weight: 400;
          font-style: normal;
          text-rendering: optimizeLegibility;
          color: #34414f;
          line-height: 66px;
          margin: 0 auto;
          display: flex;
          max-width: 1022px;
        }
        .first-section {
          display: flex;
          justify-content: center;
          margin-top: 50px;
          align-items: center;
        }
        .second-section {
          display: flex;
          justify-content: center;
          margin-top: 50px;
          align-items: center;
        }
        .text-left {
          left: 650px;
          max-width: 479px;
          width: calc(50% + 12px);
          display: flex;
          justify-content: left;
          text-align: left;
          top: 450px;
        }
        .subHead {
          font-family: LL Circular Bold Web, Muli, Arial, sans-serif;
          font-weight: 400;
          font-style: normal;
          text-rendering: optimizeLegibility;
          font-size: 26px;
          line-height: 33px;
          color: #34414f;
        }
        .description {
          margin-top: 8px;
          font-family: LL Circular Book Web, Muli, Arial, sans-serif;
          font-weight: 300;
          font-style: normal;
          text-rendering: optimizeLegibility;
          font-size: 20px;
          line-height: 26px;
          color: #34414f;
          text-align: left;
        }
        .male-biker {
          top: 240px;
          left: 1000px;
          width: 20%;
          display: flex;
          align-items: left;
          border-radius: 25%;
        }
        .text-right {
          left: 1100px;
          max-width: 479px;
          width: calc(50% + 12px);
          display: flex;
          justify-content: right;
          text-align: left;
          top: 1000px;
        }
        .subHeadRight {
          font-family: LL Circular Bold Web, Muli, Arial, sans-serif;
          font-weight: 400;
          font-style: normal;
          text-rendering: optimizeLegibility;
          font-size: 26px;
          line-height: 33px;
          color: #34414f;
          text-align: left;
        }
        .descriptionright {
          margin-top: 8px;
          font-family: LL Circular Book Web, Muli, Arial, sans-serif;
          font-weight: 300;
          font-style: normal;
          text-rendering: optimizeLegibility;
          font-size: 20px;
          line-height: 26px;
          color: #34414f;
          text-align: left;
        }
        .girl-biker {
          top: 850px;
          left: 550px;
          width: 20%;
          display: flex;

          justify-content: left;
          border-radius: 25%;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          background-color: white;
        }
      `}</style>
    </div>
  );
}
