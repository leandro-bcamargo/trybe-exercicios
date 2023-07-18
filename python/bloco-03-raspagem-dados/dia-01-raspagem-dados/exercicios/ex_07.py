import requests
from parsel import Selector

BASE_URL = "https://en.wikipedia.org"
response = requests.get(BASE_URL + "/wiki/Gallery_of_sovereign_state_flags")
text = response.text

selector = Selector(text)
flags = selector.css(".mw-file-description::attr(href)").getall()
for flag in flags:
    print(BASE_URL + flag)
