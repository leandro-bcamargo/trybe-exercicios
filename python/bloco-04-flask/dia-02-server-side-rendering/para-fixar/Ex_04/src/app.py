from flask import Flask
from controllers.product_controller import product_controller

app = Flask(__name__, template_folder="views/templates")
app.register_blueprint(product_controller)

if __name__ == "__main__":
    app.run(debug=True)
