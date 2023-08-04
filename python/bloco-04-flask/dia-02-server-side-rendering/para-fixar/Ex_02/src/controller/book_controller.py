from models.book_model import Book
from flask import Blueprint, render_template

book_controller = Blueprint("book_controller", __name__)

book = Book("Harry Potter", "J.K. Rowling", "1997")


@book_controller.route("/", methods=["GET"])
def book_view():
    return render_template("book.html", book=book)
