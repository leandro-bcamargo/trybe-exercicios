import requests
from parsel import Selector

BASE_URL = "http://books.toscrape.com/catalogue"
response = requests.get(BASE_URL + "/the-grand-design_405/index.html")

selector = Selector(text=response.text)

title = selector.css(".product_main > h1::text").get()
price = selector.css(".price_color::text").re_first(r"£\d+\.\d+")
image_url = BASE_URL + selector.css(".item.active > img::attr(src)").get()
description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]
quantity = selector.css(".instock.availability::text").re_first(r"\d+")


print(title, price, image_url, description, quantity, sep=",")
