from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    welcome_message = "Welcome to my website!"
    return render_template("index.html", message=welcome_message)


if __name__ == "__main__":
    app.run(debug=True)
