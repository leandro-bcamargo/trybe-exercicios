from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, "index.html")


def product(request):
    if request.method == "POST":
        name = request.POST["name"]
        description = request.POST["description"]
        price = request.POST["price"]
        seller = request.POST["seller"]

        context = {
            "name": name,
            "description": description,
            "price": price,
            "seller": seller,
        }

        return render(request, "product.html", context)

    return render(request, "product.html")


def seller(request):
    if request.method == "POST":
        name = request.POST["name"]
        email = request.POST["email"]

        context = {
            "name": name,
            "email": email,
        }

        return render(request, "seller.html", context)

    return render(request, "seller.html")


def buyer(request):
    if request.method == "POST":
        name = request.POST["name"]
        email = request.POST["email"]

        context = {
            "name": name,
            "email": email,
        }

        return render(request, "buyer.html", context)

    return render(request, "buyer.html")


def order(request):
    if request.method == "POST":
        product = request.POST["product"]
        buyer = request.POST["buyer"]

        context = {
            "product": product,
            "buyer": buyer,
        }

        return render(request, "order.html", context)

    return render(request, "order.html")
