from bson import ObjectId
from flask import Blueprint, jsonify, request
from models.song_model import SongModel
from enum import Enum

songs_controller = Blueprint("songs_blueprint", __name__)


class HttpStatus(Enum):
    OK = 200
    CREATED = 201
    NO_CONTENT = 204
    BAD_REQUEST = 400
    NOT_FOUND = 404


def _get_all_songs():
    songs = SongModel.find()
    return [song.to_dict() for song in songs]


def _get_song(id: str):
    return SongModel.find_one({"_id": ObjectId(id)})


def _get_random_song():
    song = SongModel.get_random()
    if song is None:
        return jsonify({"error": "No songs found"}), 404

    return jsonify(song.to_dict()), HttpStatus.OK


@songs_controller.route("/", methods=["GET"])
def song_index():
    return jsonify(_get_all_songs())


@songs_controller.route("/random", methods=["GET"])
def song_random():
    return _get_random_song()


@songs_controller.route("/", methods=["POST"])
def song_create():
    new_song = SongModel(request.json)
    new_song.save()
    return jsonify(new_song.to_dict()), HttpStatus.CREATED


@songs_controller.route("/<id>", methods=["GET"])
def song_show(id: str):
    song = _get_song(id)
    if song is None:
        return jsonify({"error": "Song not found"}), HttpStatus.NOT_FOUND

    return jsonify(song.to_dict()), HttpStatus.OK


@songs_controller.route("/<id>", methods=["DELETE"])
def song_delete(id: str):
    song = _get_song(id)
    if song is None:
        return jsonify({"error": "Song not found"}), HttpStatus.NOT_FOUND

    song.delete()
    return jsonify(song.to_dict()), HttpStatus.NO_CONTENT
