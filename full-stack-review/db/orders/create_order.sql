INSERT INTO customer_order_reviewday (
    customer_id,
    paid
) VALUES (
    $1,
    false
)
returning customer_order_id, paid;