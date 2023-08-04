from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "Hello, World!"


@app.route("/api")
def api_hello_world():
    return jsonify(hello="world")


if __name__ == "__main__":
    app.run(host="0000000", port=8000, debug=True)
