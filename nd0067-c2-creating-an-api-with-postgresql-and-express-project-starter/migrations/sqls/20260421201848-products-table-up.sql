CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price integer NOT NULL,
  url VARCHAR(500),
  description TEXT
);

INSERT INTO products (name, price, url, description)
VALUES
(
  'Laptop Stand',
  55,
  'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
  'An adjustable laptop stand for a comfortable workspace.'
),
(
  'Gaming Controller',
  65,
  'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=400',
  'A wireless gaming controller with ergonomic design.'
),
(
  'Desk Chair',
  180,
  'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400',
  'A comfortable office chair for long work sessions.'
),
(
  'Phone Case',
  18,
  'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=400',
  'A protective phone case with a clean modern look.'
),
(
  'Tablet',
  320,
  'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
  'A lightweight tablet for reading, browsing, and entertainment.'
),
(
  'Bluetooth Speaker',
  90,
  'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
  'A portable Bluetooth speaker with rich sound.'
),
(
  'Travel Bag',
  75,
  'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
  'A practical travel bag with spacious storage.'
),
(
  'Wall Clock',
  28,
  'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400',
  'A simple wall clock with a minimal design.'
),
(
  'Plant Pot',
  22,
  'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400',
  'A decorative plant pot for your home or office.'
),
(
  'Desk Organizer',
  30,
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
  'A desk organizer to keep your workspace neat and clean.'
),
(
  'Wireless Mouse',
  35,
  'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
  'A smooth and responsive wireless mouse for everyday use.'
),
(
  'Keyboard',
  70,
  'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
  'A modern keyboard with a comfortable typing experience.'
),
(
  'Coffee Mug',
  15,
  'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400',
  'A ceramic coffee mug for your daily drinks.'
),
(
  'Notebook',
  12,
  'https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=400',
  'A simple notebook for notes, plans, and ideas.'
),
(
  'Desk Lamp',
  45,
  'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
  'A stylish desk lamp that adds light to your workspace.'
),
(
  'Water Bottle',
  20,
  'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
  'A reusable water bottle for work, school, or travel.'
),
(
  'Sunglasses',
  40,
  'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
  'Classic sunglasses with a clean and modern style.'
),
(
  'Headphones Stand',
  25,
  'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400',
  'A simple stand to keep your headphones organized.'
);