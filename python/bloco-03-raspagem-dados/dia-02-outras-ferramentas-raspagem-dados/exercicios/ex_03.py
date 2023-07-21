from selenium import webdriver
from selenium.webdriver.common.by import By

options = webdriver.FirefoxOptions()
options.add_argument("--ignore-certificate-errors")
options.add_argument("--ignore-ssl-errors=yes")
options.add_argument("--start-maximized")

firefox = webdriver.Remote(
    command_executor="http://localhost:4444/wd/hub", options=options
)

firefox.get("https://diolinux.com.br/")

cards = firefox.find_elements(By.CLASS_NAME, "inhype-grid-post")

result = []

for card in cards:
    title = (
        card.find_element(By.TAG_NAME, "h3")
        .find_element(By.TAG_NAME, "a")
        .text
    )

    link = (
        card.find_element(By.CLASS_NAME, "inhype-post-image-wrapper")
        .find_element(By.TAG_NAME, "a")
        .get_attribute("href")
    )

    result.append((title, link))


print(result)

firefox.quit()
