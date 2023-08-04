from flask import Flask
from controllers.jokes_controller import jokes_controller
from controllers.songs_controller import songs_controller
from os import environ
from waitress import serve

app = Flask(__name__)
app.register_blueprint(jokes_controller, url_prefix="/jokes")
app.register_blueprint(songs_controller, url_prefix="/songs")


def start_server(host: str = "0.0.0.0", port: int = 8000):
    if environ.get("FLASK_ENV") == "dev":
        # Servidor de desenvolvimento do Kit Werkzeug
        app.run(debug=True, host=host, port=port)
    else:
        # Este é o waitress, otimizado para produção
        serve(app, host=host, port=port)


if __name__ == "__main__":
    start_server()
