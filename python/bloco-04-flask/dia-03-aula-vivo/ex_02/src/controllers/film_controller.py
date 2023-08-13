from models.film_model import FilmModel
from flask import Blueprint, render_template, request

film_blueprint = Blueprint("film_blueprint", __name__, url_prefix="/films")


class FilmController:
    @film_blueprint.get("/")
    def view_all_films():
        films = FilmModel.search_film_by_title({})
        films_dict = [film.to_dict() for film in films]

        return render_template("index.html", films=films_dict)

    @film_blueprint.post("/")
    def view_films_title():
        title = request.form["title"]
        film = FilmModel.search_film_by_title(title)
        film_dict = film.to_dict()

        return render_template("index.html", films=[film_dict])

    @film_blueprint.get("/<string:id>")
    def view_films_id(id):
        film = FilmModel.search_film_by_id(id)

        film_dict = film.to_dict()

        return render_template("film.html", film=film_dict)

    # @film_blueprint.get("/details/<string:title>")
    # def view_film_details(title):
    #     film = FilmModel.search_film_by_title(title)
    #     return film.to_dict()
