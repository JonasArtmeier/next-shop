// Insert products into database
exports.up = async (sql) => {
  sql`
      INSERT INTO products (name, type, image, color, size, price, stock) VALUES
  ('crazy-pink', 'girl', '/crazy-pink.png', 'pink', 'xs', '150.00', '8'),
  ('crazy-pink', 'girl', '/crazy-pink.png', 'pink', 's', '150.00', '8'),
  ('crazy-pink', 'girl', '/crazy-pink.png', 'pink', 'm', '150.00', '8'),
  ('crazy-pink', 'girl', '/crazy-pink.png', 'pink', 'l', '150.00', '8'),
  ('crazy-pink', 'boy', '/crazy-red.png', 'red', 'xs', '170.00', '8'),
  ('crazy-pink', 'boy', '/crazy-red.png', 'red', 's', '170.00', '8'),
  ('crazy-pink', 'boy', '/crazy-red.png', 'red', 'm', '170.00', '8'),
  ('crazy-pink', 'boy', '/crazy-red.png', 'red', 'l', '170.00', '8')`;
};

// Remove products from database
exports.down = async (sql) => {
  sql`
    DELETE FROM products
      WHERE name IN ('crazy-pink')
  `;
};
