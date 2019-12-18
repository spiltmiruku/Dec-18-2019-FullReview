SELECT * FROM customers c
JOIN customer_order_reviewday co on c.customer_id = co.customer_id
WHERE c.email = $1
AND co.paid = false;