DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;
CREATE TABLE products
(
    id INT NOT NULL
    AUTO_INCREMENT,
    item_id INT
    (10),
    product_name VARCHAR
    (30),
    department_name VARCHAR
    (30),
    price INT
    (10),
    stock_quantity INT
    (10),
    PRIMARY KEY(id)
);
    INSERT INTO products
        (item_id, product_name, department_name, price, stock_quantity)
    VALUES
        (01, 'GameBoy Color', 'Electronics', 60, 200);
    INSERT INTO products
        (item_id, product_name, department_name, price, stock_quantity)
    VALUES
        (02, 'Original Sony NES', 'Electronics', 50, 2000);
    INSERT INTO products
        (item_id, product_name, department_name, price, stock_quantity)
    VALUES
        (03, 'Centipede Arcade Cabinet', 'Electronics', 1800, 5);
    INSERT INTO products
        (item_id, product_name, department_name, price, stock_quantity)
    VALUES
        (04, 'Refurbished Wash Cloth', 'Bath', 4, 11);
    INSERT INTO products
        (item_id, product_name, department_name, price, stock_quantity)
    VALUES
        (05, 'A Dusty Umbrella', 'Accessories', 75, 1);
    INSERT INTO products
        (item_id, product_name, department_name, price, stock_quantity)
    VALUES
        (06, 'Expired Jar of Mayonnaise', 'Kitchen', 5, 3);
    INSERT INTO products
        (item_id, product_name, department_name, price, stock_quantity)
    VALUES
        (07, 'Neon Fanny Pack', 'Accessories', 35, 2500);
    INSERT INTO products
        (item_id, product_name, department_name, price, stock_quantity)
    VALUES
        (08, 'Afro Wig for Dogs', 'Pets', 20, 1000);
    INSERT INTO products
        (item_id, product_name, department_name, price, stock_quantity)
    VALUES
        (09, 'Shirtless Nic Cage Pillowcase', 'Living Room', 20, 200);
    INSERT INTO products
        (item_id, product_name, department_name, price, stock_quantity)
    VALUES
        (10, 'Bigfoot Statue', 'Lawn & Patio', 800, 10);

    SELECT * FROM products;