require('./extractHerokuDatabaseEnvVars')();

require('dotenv').config();

// for postgres on AWS
// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host: process.env.mywebshop,
//   user: process.env.mywebshop,
//   password: process.env.mywebshop,
//   port: 5432,
// });

// connection.connect(function (err) {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }

//   console.log('Connected to database.');
// });

// connection.end();

// end of Postres on AWS

const postgres = require('postgres');
const sql =
  process.env.NODE_ENV === 'production'
    ? // Heroku needs SSL connections but
      // has an "unauthorized" certificate
      // https://devcenter.heroku.com/changelog-items/852
      postgres({ ssl: { rejectUnauthorized: false } })
    : postgres();

export async function getProducts() {
  const products = await sql`
    SELECT * FROM products
  `;
  return products;
}

export async function updateStockById(id) {
  const stock = await sql`
    UPDATE products
      SET stock = ${stock - 1}
      WHERE id = ${id}
  `;
  return stock;
}

export async function getProductById(id) {
  const product = await sql`
    SELECT * FROM products WHERE id = ${id}
  `;
  return product;
}

// export function getUsers() {
//   return users;
// }

// export function getUserById(id) {
//   return users.find((user) => user.id === id);
// }

// const product = [
//   {
//     id: '01',
//     name: 'crazy pink',
//     type: 'girl',
//     image: '/crazy-pink.png',
//     url: '/about',
//     color: 'pink',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },
//   {
//     id: '02',
//     name: 'crazy red',
//     type: 'boy',
//     image: '/TW02navy.jpg',
//     url: '/about',
//     color: 'red',
//     size: ['XS', 'S', 'M', 'L', 'XL'],
//     price: 20,
//   },
// ];

// export async function getProducts() {
//   const product = await getProducts();
// }

// getProducts.getInitialProps = async (ctx) => {
//   const res = await fetch('postgres');
//   const json = await res.json();
//   return { stars: json.stargazers_count };
// };

// export function getProductsById(id) {
//   return products.find((products) => products.id === id);
// }

// CREATE TABLE products(
//   id SERIAL PRIMARY KEY,
//   name VARCHAR NOT NULL,
//   type VARCHAR NOT NULL,
//   image VARCHAR NOT NULL,
//   color TEXT,
//   size VARCHAR NOT NULL,
//   price decimal check (price > 0),
//   stock decimal);

// INSERT INTO products (name, type, image, color, size, price, stock) VALUES
// ('crazy-pink', 'girl', '/crazy-pink.png', 'pink', 'xs', '150.00', '8'),
// ('crazy-pink', 'girl', '/crazy-pink.png', 'pink', 's', '150.00', '8'),
// ('crazy-pink', 'girl', '/crazy-pink.png', 'pink', 'm', '150.00', '8'),
// ('crazy-pink', 'girl', '/crazy-pink.png', 'pink', 'l', '150.00', '8'),
// ('crazy-pink', 'boy', '/crazy-red.png', 'red', 'xs', '170.00', '8'),
// ('crazy-pink', 'boy', '/crazy-red.png', 'red', 's', '170.00', '8'),
// ('crazy-pink', 'boy', '/crazy-red.png', 'red', 'm', '170.00', '8'),
// ('crazy-pink', 'boy', '/crazy-red.png', 'red', 'l', '170.00', '8');
