// Create the products table
exports.up = async (sql) => {
  sql`
 CREATE TABLE products(
   id SERIAL PRIMARY KEY,
   name VARCHAR NOT NULL,
   type VARCHAR NOT NULL,
   image VARCHAR NOT NULL,
   color TEXT,
   size VARCHAR NOT NULL,
   price decimal check (price > 0),
   stock decimal)`;
};

// Delete the products table
exports.down = async (sql) => {
  sql`
    DROP TABLE products
  `;
};
