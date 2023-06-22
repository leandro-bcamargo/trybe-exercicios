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


def find_friends(friends):
    friends_dict = dict()

    for friend_left, friend_right in friends:
        if friend_left not in friends_dict:
            friends_dict[friend_left] = set()
        if friend_right not in friends_dict:
            friends_dict[friend_right] = set()
        friends_dict[friend_left].add(friend_right)
        friends_dict[friend_right].add(friend_left)

    return friends_dict


if __name__ == "__main__":
    print(find_friends(friends))
