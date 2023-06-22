def calculate_score(dictionary):
    score = 1
    for key in dictionary:
        score += len(dictionary[key])
    return score


def calculate_score_rec(subordinates, person):
    score = 1
    for subordinate in subordinates[person]:
        score += calculate_score_rec(subordinates, subordinate)

    return score


subordinates = {1: [2, 3], 2: [4], 3: [], 4: [5, 6], 5: [7], 6: [], 7: []}

print(calculate_score_rec(subordinates, 1))
print(calculate_score(subordinates))
