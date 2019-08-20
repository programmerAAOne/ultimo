<?php

namespace app\Models;

class OrderModel extends Models {

  public function getOrders() {
    $sth = $this->db->pdo->prepare('SELECT 
      orderNumber,
      orderDate,
      requiredDate,
      shippedDate,
      status,
      comments,
      customerNumber FROM orders
      ORDER BY shippedDate DESC'
    );

    $sth->execute();

    if (!is_null($sth->errorInfo()[2]) ) {
      return array(
        'success' => false,
        'description' => $sth->errorInfo()[2]
      );
    } else if (empty($sth)) {
      return array('notFound' => true, 'description' => 'The result is empty');
    }


    return array(
      'success' => true,
      'description' => 'The orders were found',
      'orders' => $sth->fetchAll($this->db->pdo::FETCH_ASSOC)
    );
  }

  public function getOrdersDetails() {
    $sth = $this->db->pdo->prepare('SELECT 
      orderNumber,
      products.productName,
      orderdetails.productCode,
      quantityOrdered,
      priceEach,
      orderLineNumber FROM orderdetails
      INNER JOIN products
      ON orderdetails.productCode = products.productCode'
    );

    $sth->execute();

    if (!is_null($sth->errorInfo()[2]) ) {
      return array(
        'success' => false,
        'description' => $sth->errorInfo()[2]
      );
    } else if (empty($sth)) {
      return array('notFound' => true, 'description' => 'The result is empty');
    }


    return array(
      'success' => true,
      'description' => 'The orderDetails was found',
      'orderDetails' => $sth->fetchAll($this->db->pdo::FETCH_ASSOC)
    );
  }

  public function insertOrder($order) {
    $oderNumber = time();
    $lines = $order['cart']['lines'];

    $this->db->pdo->beginTransaction();
    
    $this->db->insert('orders', [
      'orderNumber' => $oderNumber,
      'orderDate' => date('Y-m-d', time()),
      'requiredDate' => date('Y-m-d', time()),
      'status' => 'In Process',
      'customerNumber' => '496'
    ]);

    foreach($lines as $key => $line) {
      $product = $line['product'];
      $quantity = $line['quantity'];

      $this->db->insert('orderdetails', [
        'orderNumber' => $oderNumber,
        'productCode' => $product['productCode'],
        'quantityOrdered' => $quantity,
        'priceEach' => $product['MSRP'],
        'orderLineNumber' => $key + 1
      ]);
    }

    if (!is_null($this->db->error()[1])) {
      // Deshace las inserciones en caso de error.
      $this->db->pdo->rollBack();
      return array(
        'success' => false,
        'description' => $this->db->error()[2]
      );
    }

    // Confirmar las inserciones.
    $this->db->pdo->commit();
    return array(
      'success' => true,
      'description' => 'The order was registered'
    );

  }

}

?>