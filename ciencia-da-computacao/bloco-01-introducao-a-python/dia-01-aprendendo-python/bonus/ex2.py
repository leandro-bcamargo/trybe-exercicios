def build_triangle(number_of_stars):
    stars_in_row = 1
    for rows in range(number_of_stars):
        print(stars_in_row * '*')
        stars_in_row += 1


build_triangle(5)
