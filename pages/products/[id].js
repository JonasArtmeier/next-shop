import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import React, { useState } from 'react';
import cartCookies from '../../cookies.js';
import nextCookies from 'next-cookies';

// import { getProductsById } from '../../db.js';

// export function CartButton(props) {
//   const freshCookies = () => {
//     let newCookies = [];
//     const oldCookies = Cookies.get('shoppingCart');
//     oldCookies === undefined
//       ? (newCookies = [props.items])
//       : (newCookies = [...JSON.parse(oldCookies), props.bikes]);
//     Cookies.set('shoppingCart', newCookies);
//   };

export default function bike(props) {
  if (!props.product[0]) return <div>product not found!</div>;

  const [clientStock, setClientStock] = useState(props.product[0].stock);
  return (
    <div className="container">
      <Head>
        <title>Jo's Shop</title>
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <Header />
      <main>
        <h1>Bikes for girls</h1>
        <section className="section">
          <div>
            <div>The Image</div>
            <img
              className="image"
              alt="the Product"
              src={props.product[0].image}
            ></img>
          </div>
          <div className="row">
            <h1>{props.product[0].name}</h1>
            <h3>Size:</h3>
            <p>{props.product[0].size}</p>
            <p>stainless Steel </p>
            <p>shipping in less than one week</p>
            <p> easy to assemble</p>
            <h3>Stock:</h3>
            <p>{clientStock}</p>
            <div>
              <h3>Price:</h3>
              <p>{props.product[0].price}€</p>
              <button
                className="orderButton"
                onClick={() => {
                  setClientStock(clientStock - 1);

                  cartCookies(props);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        .container {
          margin: 0;
        }
        .title {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .section {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          height: 100%;
          overflow: hidden;
        }
        .row {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 50%;
          text-align: center;
          margin-top: 40px;
        }
        .row_2 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 100%;
        }
        .productInfos {
          display: grid;
          justify-content: start;
          height: 100%;
          height: 100%;
        }
        .productInfos * + * {
          margin-top: 10px;
        }
        .image {
          height: auto;
          z-index: 1;
          overflow: hidden;
        }
        .image :hover {
          transition: 300ms;
          transform: scale(1.05);
        }
        .image_2 {
          margin: 10px 40px 0 0;
          height: auto;
          z-index: 2;
        }
        .buttonSection {
          text-align: center;
        }
        .buttonSection * + * {
          margin: 10px;
        }
        .orderButton {
          margin-top: 40px;
          background: none;
          color: black;
          border: none;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.15em;
          text-align: center;
          display: inline-block;
          position: relative;
          width: 170px;
          height: 70px;
          border: 1px solid #c8d8d4cd;
        }
        .orderButton :hover {
          transition: 400ms;
          color: #fff;
          cursor: pointer;
          background-color: rgb(77, 141, 198);
        }
        a {
          color: black;
          text-decoration: none;
          letter-spacing: 0.15em;
          padding: 10px 0;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          display: block;
          max-width: 100%;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        h1 {
          margin: 0;
          letter-spacing: 3px;
          padding: 0;
          font-size: 45px;
          font-weight: 300;
          text-transform: uppercase;
        }
        h2 {
          margin: 0;
          padding: 0;
          font-size: 40px;
          font-weight: 300;
          letter-spacing: 2px;
        }
        h3 {
          margin: 0;
          padding: 0;
          font-size: 30px;
          font-weight: 300;
          letter-spacing: 2px;
        }
        h4 {
          margin: 0;
          padding: 0;
          font-size: 26px;
          font-weight: 300;
          letter-spacing: 2px;
        }
        p {
          margin: 4px;
          padding: 0;
          font-size: 16px;
          font-weight: 300;
          letter-spacing: 2px;
        }
      `}</style>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const { getProducts } = await import('../../db.js');

//   const products = await getProducts();

//   return {
//     props: {
//       products,
//     },
//   };
// }

// import freshCookies from '../../components/Cookies';

export async function getServerSideProps(context) {
  const id = context.params.id;

  // const { cartCookies } = await import('../../cookies.js');
  // const freshCookies = await cartCookies();
  const { shoppingCart } = nextCookies(context);

  const {
    getProductById, // updateStockById
  } = await import('../../db.js');

  const product = await getProductById(id);
  // await updateStockById(event);

  return {
    props: {
      product,
      ...(shoppingCart ? { shoppingCart: shoppingCart } : undefined),
      y,
    },
  };
}
