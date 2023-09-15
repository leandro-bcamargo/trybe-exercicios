from django.db import models


# Create your models here.
class Customer(models.Model):
    name = models.CharField(max_length=50, null=True)
    address = models.CharField(max_length=200, null=True)
    phone = models.CharField(max_length=20, null=True)
