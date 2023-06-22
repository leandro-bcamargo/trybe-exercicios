friends = [
    ("Dani", "Ali"),
    ("Fabi", "Zizu"),
    ("Gabi", "Ito"),
    ("Fabi", "Rafa"),
    ("Ali", "Fabi"),
    ("Rafa", "Lulu"),
    ("Gabi", "Hos"),
    ("Eli", "Hos"),
    ("Hos", "Dani"),
    ("Zizu", "Gabi"),
    ("Fabi", "Gabi"),
]


def count_uniques(friends):
    seen_before = set()

    for friend1, friend2 in friends:
        seen_before.add(friend1)
        seen_before.add(friend2)

    return len(seen_before)


if __name__ == "__main__":
    print(count_uniques(friends))
