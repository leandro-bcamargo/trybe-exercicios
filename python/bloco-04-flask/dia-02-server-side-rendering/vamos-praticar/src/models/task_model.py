class Task:
    def __init__(self, id, title, completed=False) -> None:
        self.id = id
        self.title = title
        self.completed = completed


tasks = [
    Task(1, "Study programming"),
    Task(2, "Study English", True),
    Task(3, "Study Math"),
]
