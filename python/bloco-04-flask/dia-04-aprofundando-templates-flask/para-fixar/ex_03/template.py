from jinja2 import Environment, FileSystemLoader
from os import path


def render_contact(name, email, msg):
    template_path = path.dirname(__file__)
    loader = FileSystemLoader(template_path)
    env = Environment(loader=loader)
    template = env.get_template("index.html")
    return template.render(name=name, email=email, msg=msg)


name = input("Enter your name: ")
email = input("Enter your email: ")
msg = input("Enter your message: ")
print(render_contact(name, email, msg))
