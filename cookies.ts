// import nextCookies from 'next-cookies';
import Cookies from 'js-cookie';

type Props = {
  product: {
    id: string;
    name: string;
    stock: string;
    image: string;
    size: string;
    price: string;
  };
};

export default function cartCookies(props) {
  let newCookies = [];
  const oldCookies = Cookies.get('shoppingCart');
  oldCookies === undefined
    ? (newCookies = [props.product[0]])
    : (newCookies = [...JSON.parse(oldCookies), props.product[0]]);
  Cookies.set('shoppingCart', newCookies);
}

// export async function getServerSideProps(context) {
//   const { shoppingCart } = nextCookies(context);
//   const {
//     getProductById, // updateStockById
//   } = await import('./db.js');
//   const product = await getProductById();

//   return {
//     props: {
//       product,
//       ...(shoppingCart ? { shoppingCart: shoppingCart } : undefined),
//     },
//   };
// }
