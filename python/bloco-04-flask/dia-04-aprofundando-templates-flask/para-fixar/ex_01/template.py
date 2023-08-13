from jinja2 import Template


def render_names(names):
    template_string = """
    {% for name in names %}
        {{loop.index}}. {{name}}
    {% endfor %}
    """

    template = Template(template_string)
    return template.render(names=names)


print(render_names(["John", "Jane", "Joe"]))
