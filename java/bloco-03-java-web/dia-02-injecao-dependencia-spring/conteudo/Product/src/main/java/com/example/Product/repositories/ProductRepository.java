package com.example.Product.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ProductRepository {
  private Database database;
  @Autowired
  public ProductRepository(Database database) {
    this.database = database;
  }
  public String getMessage() {
    return "Mensagem: Produto retornado";
  }
}
