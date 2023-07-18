"""
Sure! Here are some web scraping exercises you can try using the website `books.toscrape.com`:

1. Extract the title and price of all books on the homepage: Write a script that uses a CSS selector to select the title and price of each book on the homepage, and prints them to the console.

2. Extract the details of all books in a specific category: Write a script that navigates to a specific category page, such as "Science Fiction", and extracts the title, price, and availability of each book in that category.

3. Follow pagination links to extract data from multiple pages: Modify the script from exercise 2 to follow the pagination links at the bottom of each category page, and extract data from all pages in the category.

4. Save the extracted data to a CSV file: Modify the script from exercise 3 to save the extracted data to a CSV file instead of printing it to the console.

5. Handle errors and missing data: Modify the script from exercise 4 to handle errors, such as network errors or missing data, gracefully. For example, you could use try-except blocks to catch exceptions, and provide default values for missing data.

Remember to always be respectful and follow the website's terms of use and robots.txt file when scraping data.

Is there anything else you would like to know?
"""

from parsel import Selector
import requests

BASE_URL = "http://books.toscrape.com/"


def get_info(category):
    category = category.lower()
    response = requests.get(BASE_URL)
    text = response.text

    selector = Selector(text)

    category_elements = selector.css(".nav-list li ul li a")

    category_link = ""

    for element in category_elements:
        if element.css("::text").get().strip().lower() == category:
            category_link = BASE_URL + element.css("::attr(href)").get()

    response = requests.get(category_link)
    text = response.text

    selector = Selector(text)

    title = selector.css(".product_pod  h3 a::text").getall()
    price = selector.css(".price_color::text").re(r"£\d+\.\d{2}")
    availability = [
        avail.strip()
        for avail in selector.css(".instock.availability::text").getall()
        if avail.strip()
    ]

    result = []
    result.append([entry for entry in zip(title, price, availability)])

    next_link = selector.css(".next a::attr(href)").get()
    while next_link:
        response = requests.get(category_link + next_link)
        text = response.text
        print()


print(get_info("romance"))
