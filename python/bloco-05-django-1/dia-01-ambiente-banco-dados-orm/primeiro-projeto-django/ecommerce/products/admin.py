from django.contrib import admin

# Register your models here.
from products.models import Product

admin.site.site_header = "Trybe Products E-commerce"

admin.site.register(Product)
