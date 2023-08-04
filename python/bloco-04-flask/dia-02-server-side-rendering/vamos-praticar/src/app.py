from flask import Flask
from controllers.task_controller import task_controller

app = Flask(__name__, template_folder="views/templates")
app.register_blueprint(task_controller)

if __name__ == "__main__":
    app.run(debug=True)
