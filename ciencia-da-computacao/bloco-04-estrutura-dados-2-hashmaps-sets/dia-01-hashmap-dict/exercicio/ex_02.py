class Hierarchy:
    def __init__(self, subordinates) -> None:
        self.subordinates = subordinates
        self.scores = {}

    def get_score(self, person):
        if person in self.scores:
            print("Score já calculado")
            return self.scores[person]

        score = 1

        for subordinate in self.subordinates:
            score += self.get_score(subordinate)

        return score
