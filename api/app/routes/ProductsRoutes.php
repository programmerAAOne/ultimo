<?php

$app->get('/products', 'ProductsController:getProducts');
$app->get('/products/{productCode}', 'ProductsController:getProductById');
$app->post('/products', 'ProductsController:insertProducts');
$app->put('/products/{productCode}', 'ProductsController:updateProduct');

?>