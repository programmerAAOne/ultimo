<?php

namespace app\Controllers;

class OrderController extends Controller {

  public function insertOrder($request, $response) {
    $order = $request->getParsedBody();
    $message = $this->OrderModel->insertOrder($order);
    // var_dump($order['cart']['lines'][0]['product']['MSRP']); die();
    return json_encode($message);
  }

  public function getOrders($request, $response) {
    $message = $this->OrderModel->getOrders();
    return json_encode($message);
  }

  public function getOrdersDetails($request, $response) {
    $message = $this->OrderModel->getOrdersDetails();
    return json_encode($message);
  }

}

?>