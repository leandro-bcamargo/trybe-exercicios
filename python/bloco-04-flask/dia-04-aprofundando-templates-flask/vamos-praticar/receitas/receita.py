from jinja2 import Environment, FileSystemLoader
from os.path import join, dirname, abspath
from recipe_data import data as recipe
from filters.convert_to_list import convert_to_list


def render_recipes(recipe):
    receitas_dir = dirname(abspath(__file__))
    print("receitas_dir:", receitas_dir)

    templates_dir = join(receitas_dir, "templates")
    print("templates_dir:", templates_dir)

    loader = FileSystemLoader(templates_dir)

    environment = Environment(loader=loader)

    environment.filters["convert_to_list"] = convert_to_list

    template = environment.get_template("receita.html")

    return template.render(recipe=recipe)


print(render_recipes(recipe))
