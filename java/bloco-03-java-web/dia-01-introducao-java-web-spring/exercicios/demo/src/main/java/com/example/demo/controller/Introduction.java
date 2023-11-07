package com.example.demo.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/javaweb")

public class Introduction {
  @GetMapping
  public String introduce() {
    return "Estou aprendendo a criar aplicações Java para a Web!!!!";
  }
}
