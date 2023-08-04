# jokes_controller.py
from bson import ObjectId
from flask import Blueprint, jsonify, request
from models.joke_model import JokeModel
from enum import Enum

jokes_controller = Blueprint("jokes_blueprint", __name__)


class HttpStatus(Enum):
    OK = 200
    CREATED = 201
    BAD_REQUEST = 400
    NOT_FOUND = 404
    INTERNAL_SERVER_ERROR = 500
    NO_CONTENT = 204


# ---------
# Funções protegidas da camada de Controller
def _get_all_jokes():
    jokes = JokeModel.find()
    return [joke.to_dict() for joke in jokes]


def _get_joke(id: str):
    # ObjectId transforma uma string em ID do MongoDb
    return JokeModel.find_one({"_id": ObjectId(id)})


# ---------
# Rotas HTTP para nossa API
@jokes_controller.route("/", methods=["GET"])
def joke_index():
    jokes_list = _get_all_jokes()
    return jsonify(jokes_list)


@jokes_controller.route("/random", methods=["GET"])
def joke_random():
    joke = JokeModel.get_random()
    # Exemplo de Validação
    if joke is None:
        # O Flask entende que o número após o jsonify, representa o Status HTTP
        return jsonify({"error": "No jokes available"}), HttpStatus.NOT_FOUND

    return jsonify(joke.to_dict()), HttpStatus.OK


@jokes_controller.route("/", methods=["POST"])
def joke_post():
    new_joke = JokeModel(request.json)
    new_joke.save()
    return jsonify(new_joke.to_dict()), HttpStatus.CREATED


@jokes_controller.route("/<id>", methods=["PUT"])
def joke_update(id: str):
    joke = _get_joke(id)
    joke.update(request.json)
    return jsonify(joke.to_dict()), HttpStatus.OK


@jokes_controller.route("/<id>", methods=["GET"])
def joke_show(id: str):
    joke = _get_joke(id)
    return jsonify(joke.to_dict()), HttpStatus.OK


@jokes_controller.route("/<id>", methods=["DELETE"])
def joke_delete(id: str):
    joke = _get_joke(id)
    # Exemplo de Validação
    if joke is None:
        return jsonify({"error": "Joke not found"}), HttpStatus.NOT_FOUND

    joke.delete()
    return jsonify(joke.to_dict()), HttpStatus.NO_CONTENT
