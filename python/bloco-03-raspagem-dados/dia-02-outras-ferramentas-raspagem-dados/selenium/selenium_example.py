# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from selenium import webdriver
from time import sleep

# from selenium import webdriver
from selenium.webdriver.common.keys import Keys  # Importa teclas comuns

# Para usar o chrome ao invés do firefox trocamos FirefoxOptions por ChromeOptions
# Todavia, caso esteja utilizando o docker, atente-se ao container sendo utilizado.
options = webdriver.FirefoxOptions()
options.add_argument("--ignore-certificate-errors")
options.add_argument("--ignore-ssl-errors=yes")
options.add_argument("--start-maximized")

firefox = webdriver.Remote(
    command_executor="http://localhost:4444/wd/hub", options=options
)


# firefox = webdriver.Firefox()

response = firefox.get("https://www.google.com.br/")

# pesquisa na instância aberta do navegador pela primeira ocorrência
# do nome 'q'
search_input = firefox.find_element("name", "q")

# escreve selenium dentro do campo de pesquisa
search_input.send_keys("selenium")

# pressiona enter para realizar a busca
search_input.send_keys(Keys.ENTER)
sleep(60)
firefox.quit()
