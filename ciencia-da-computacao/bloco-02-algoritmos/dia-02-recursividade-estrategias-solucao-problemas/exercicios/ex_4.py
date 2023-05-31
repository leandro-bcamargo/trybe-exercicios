def find_gcd(a: int, b: int):
    if b == 0:
        return a

    return find_gcd(b, a % b)


if __name__ == "__main__":
    print(find_gcd(200, 120))
