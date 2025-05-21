-- Create and populate the orders table
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer TEXT,
    amount REAL,
    order_date DATE
);

INSERT INTO orders (customer, amount, order_date) VALUES
('Alice', 5000, '2024-03-01'),
('Bob', 8000, '2024-03-05'),
('Alice', 3000, '2024-03-15'),
('Charlie', 7000, '2024-02-20'),
('Alice', 10000, '2024-02-28'),
('Bob', 4000, '2024-02-10'),
('Charlie', 9000, '2024-03-22'),
('Alice', 2000, '2024-03-30');

-- Task 1: Calculate total sales for March 2024
SELECT SUM(amount) AS "Total Sales for March 2024"
FROM orders
WHERE order_date BETWEEN '2024-03-01' AND '2024-03-31';

-- Task 2: Find the customer who spent the most overall
SELECT customer, SUM(amount) AS total_spent
FROM orders
GROUP BY customer
ORDER BY total_spent DESC
LIMIT 1;

-- Task 3: Calculate the average order value
SELECT AVG(amount) AS "Average Order Value"
FROM orders; 