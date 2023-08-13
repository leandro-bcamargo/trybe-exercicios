from controllers.film_controller import film_blueprint
from flask import Flask

app = Flask(__name__, template_folder="./templates")
app.register_blueprint(film_blueprint)

if __name__ == "__main__":
    app.run(debug=True)
