from jinja2 import Template

template_file = open("template.html").read()

template = Template(template_file)

data = {
    "saudacao": "Eu sou um template HTML",
    "informacao": "E essa é uma das formas de se passarem múltiplas informações para o template",
    "contexto": "Isso é possível através da criação de um contexto",
}

output = template.render(data)

print(output)
