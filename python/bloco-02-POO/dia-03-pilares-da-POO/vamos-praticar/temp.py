print("Please think of a number between 0 and 100!")
lower_limit = 0
upper_limit = 100
answer = ""
while answer != "c":
    guess = (lower_limit + upper_limit) // 2
    answer = input(
        "Is your secret number %d?\nEnter 'h' to indicate the guess is too high. Enter 'l' to indicate the guess is too low. Enter 'c' to indicate I guessed correctly. "
        % guess
    )
    if answer == "c":
        print("Game over. Your secret number was: %d" % guess)
    elif answer == "l":
        lower_limit = guess
        continue
    elif answer == "h":
        upper_limit = guess
        continue
    else:
        print("Sorry, I did not understand your input.")
        continue
