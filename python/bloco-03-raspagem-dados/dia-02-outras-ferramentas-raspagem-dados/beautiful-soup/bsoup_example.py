import requests
from bs4 import BeautifulSoup

url = "https://quotes.toscrape.com"
page = requests.get(url)
html_content = page.text

soup = BeautifulSoup(html_content, "html5lib")

print(soup.find_all("p"))
print(soup.find(id="quote"))
# print(soup.get_text())
print(soup.find_all("div", {"class": "quote"}))

title = soup.title

footer = soup.footer

# print(footer["class"])
# print(type(title.string))
