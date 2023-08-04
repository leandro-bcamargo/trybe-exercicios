from flask import Flask
from controllers.movie_controller import movie_controller

app = Flask(__name__, template_folder="view/templates")
app.register_blueprint(movie_controller)


if __name__ == "__main__":
    app.run(debug=True)
