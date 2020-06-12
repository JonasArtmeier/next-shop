import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import React from 'react';

export default function boys({ products }) {
  const boyBikes = products.filter((bike) => bike.type === 'boy');

  return (
    <div className="container">
      <Head>
        <title>Jo's Shop</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <Header />
      <main>
        {boyBikes.map((bike) => {
          return (
            <div>
              <h1>{bike.name}</h1>
              <Link href={'/products/' + bike.id}>
                <img className="image" alt="the Product" src={bike.image}></img>
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
