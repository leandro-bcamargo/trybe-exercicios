from models.product_model import Product, products
from flask import Blueprint, render_template, request, redirect


product_controller = Blueprint("product_controller", __name__)


@product_controller.route("/", methods=["GET"])
def products_view():
    return render_template("products.html", products=products)


@product_controller.route("/", methods=["POST"])
def add_product():
    id = len(products) + 1
    name = request.form["name"]
    price = float(request.form["price"])
    product = Product(id, name, price)
    products.append(product)
    return redirect("/")


@product_controller.route(
    "/delete/<int:product_id>", methods=["GET", "DELETE"]
)
def delete_product(product_id):
    for product in products:
        if product.id == int(product_id):
            products.remove(product)
            break
    return redirect("/")
