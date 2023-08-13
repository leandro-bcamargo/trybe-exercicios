from jinja2 import Environment, FileSystemLoader, TemplateNotFound
from datetime import datetime

try:
    saudacoes = {
        "manha": "Bom dia",
        "tarde": "Boa tarde",
        "noite": "Boa noite",
        "hora": datetime.now().hour,
    }

    loader = FileSystemLoader("saudacao/templates")

    environment = Environment(loader=loader)

    template = environment.get_template("saudacao.html")

    output = template.render(saudacoes)

except NameError as e:
    print("NameError:", str(e))

except TemplateNotFound as e:
    print("TemplateNotFound:", str(e))

except Exception as e:
    print("Exception:", str(e))

else:
    print(output)


print(output)
