from django.db import models


# Create your models here.
class Recipe(models.Model):
    name = models.CharField(max_length=100)
    ingredients = models.CharField(max_length=250)
    instructions = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to="menu/images", null=True, blank=True)
