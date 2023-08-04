from flask import Flask
from controller.book_controller import book_controller


app = Flask(__name__, template_folder="view/templates")
app.register_blueprint(book_controller)


if __name__ == "__main__":
    app.run(debug=True)
