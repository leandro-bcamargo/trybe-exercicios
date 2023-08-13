from jinja2 import Template
from os import path


def render_products(products):
    template_file = open(
        path.join(path.dirname(__file__), "index.html"), "r"
    ).read()
    template = Template(template_file)

    return template.render(products=products)


products = [
    {
        "name": "iPhone",
        "price": 1000,
        "stock": 10,
    },
    {
        "name": "iPad",
        "price": 500,
        "stock": 5,
    },
    {
        "name": "MacBook",
        "price": 2000,
        "stock": 3,
    },
]

print(render_products(products))
