from django.db import models


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    seller = models.ManyToManyField("Seller", related_name="products")


class Seller(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)


class Buyer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)


class Order(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    buyer = models.ForeignKey(Buyer, on_delete=models.CASCADE)
