import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function Products() {
  return (
    <div className="container">
      <Head>
        <title>Jo's Shop</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <Header />
      <main>
        <div>
          <Link href="/boys">
            <img alt="male-biker" className="male-biker" src="male-biker.png"></img>
          </Link>
          <Link href="/girls">
            <img alt="girl-biker" className="girl-biker" src="girl-bike.png"></img>
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
