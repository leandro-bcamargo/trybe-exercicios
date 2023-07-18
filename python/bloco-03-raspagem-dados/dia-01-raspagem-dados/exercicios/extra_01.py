"""
Extract the title and price of all books on the homepage: Write a script that uses a CSS selector to select the title and price of each book on the homepage, and prints them to the console.
"""

from parsel import Selector
import requests

response = requests.get("http://books.toscrape.com/")
text = response.text

selector = Selector(text)
titles = selector.css(".product_pod h3 a::attr(title)").getall()
# print(titles)
prices = selector.css(".price_color::text").re(r"£\d+\.\d{2}")
# print(prices)
dictionary = dict(zip(titles, prices))
print(dictionary)
