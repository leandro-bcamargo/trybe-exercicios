import requests
from bs4 import BeautifulSoup

page = requests.get("https://pt.wikipedia.org/wiki/Rock_in_Rio")
html_content = page.text

soup = BeautifulSoup(html_content, "html.parser")

for link in soup.find_all("a"):
    print(link.get("href"))
