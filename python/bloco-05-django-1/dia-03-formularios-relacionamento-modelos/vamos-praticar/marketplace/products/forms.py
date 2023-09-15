from django import forms
from .models import Seller, Product, Buyer


class CreateProductForm(forms.Form):
    name = forms.CharField(max_length=100)
    description = forms.Textarea()
    price = forms.DecimalField(max_digits=10, decimal_places=2)
    seller = forms.ChoiceField(choices=Seller.objects.all())


class CreateSellerForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField(max_length=100)


class CreateBuyerForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField(max_length=100)


class CreateOrderForm(forms.Form):
    product = forms.ChoiceField(choices=Product.objects.all())
    buyer = forms.ChoiceField(choices=Buyer.objects.all())
