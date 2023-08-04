from flask import Blueprint, render_template
from models.movie_model import movies

movie_controller = Blueprint("movie_controller", __name__)


@movie_controller.route("/", methods=["GET"])
def index_view():
    return render_template("index.html", movies=movies, title="Movies")
