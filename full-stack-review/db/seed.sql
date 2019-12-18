CREATE TABLE customers (
    customer_id serial PRIMARY KEY,
    email VARCHAR(100) not null,
    password VARCHAR(250) not null
);

CREATE TABLE products_reviewday (
    product_id serial primary key,
    product_name VARCHAR(50),
    product_image VARCHAR(250),
    product_description TEXT,
    price decimal
);

CREATE TABLE customer_order_reviewday (
    customer_order_id serial primary key,
    customer_id int references customers(customer_id),
    paid boolean
);

CREATE TABLE order_items (
    order_item_id serial primary key,
    customer_order_id int references customer_order_reviewday(customer_order_id),
    product_id int references products_reviewday(product_id),
    qty int,
    price decimal
);



-- INSERT INTO products_reviewday (
--     product_name,
--     product_image,
--     price,
--     product_description
-- ) VALUES (
-- 'Chiitan',
-- 'https://66.media.tumblr.com/039f17d4d86bb79de1a0c6500e0de1d1/tumblr_pli1vt5obs1r17wg1_1280.jpg',
-- 199.99,
-- 'Just your average non-violent mascot, Chiitan!'
-- );
