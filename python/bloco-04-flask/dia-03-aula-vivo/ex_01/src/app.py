from flask import Flask
from controllers.students_controller import students_controller

app = Flask(__name__, template_folder="views/templates")
app.register_blueprint(students_controller)

if __name__ == "__main__":
    app.run(debug=True)
