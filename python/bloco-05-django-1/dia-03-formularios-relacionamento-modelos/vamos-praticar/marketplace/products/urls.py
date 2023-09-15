from django.urls import path
from .views import product, index, buyer, order, seller


urlpatterns = [
    path("/", index, name="index"),
    path("product/", product, name="product"),
    path("buyer/", buyer, name="buyer"),
    path("seller/", seller, name="seller"),
    path("order/", order, name="order"),
]
