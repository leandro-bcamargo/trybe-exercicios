class Book:
    def __init__(self, title: str, author: str, number_pages: int) -> None:
        self.title = title
        self.author = author
        self.number_pages = number_pages

    def show_description(self):
        return "The book's title is {}, by {}, and it has {} pages".format(
            self.title, self.author, self.number_pages
        )


book = Book("Lord of the Rings", "J. R. R. Tolkien", 1000)
print(book.show_description())
