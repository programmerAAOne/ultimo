<?php

$app->get('/orders', 'OrderController:getOrders');
$app->get('/order-details', 'OrderController:getOrdersDetails');
$app->post('/orders', 'OrderController:insertOrder');

?>