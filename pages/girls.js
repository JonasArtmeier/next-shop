import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function girls({ products }) {
  const girlBikes = products.filter((bike) => bike.type === 'girl');

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
        {girlBikes.map((bike) => {
          return (
            <div>
              <h1>{bike.name}</h1>
              <Link href={'/products/' + bike.id}>
                <img className="image" alt="The Product" src={bike.image}></img>
              </Link>
            </div>
          );
        })}
      </main>
      <Footer />
      <style jsx>{`
        .container {
        }

        main {
          margin-top: 100px;
        }
      `}</style>
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

export async function getServerSideProps(context) {
  const { getProducts } = await import('../db.js');

  const products = await getProducts(context.params);

  return {
    props: {
      products,
    },
  };
}
