import random

words_list = ["leandro", "carmen", "edson", "lucas"]
word = random.choice(words_list)
scrambled_word = "".join(random.sample(word, len(word)))

is_answer_correct = False
for attempt_number in range(3):
    guessed_word = input(
        f"Please unscrambled the following word: {scrambled_word}\n"
    )
    if guessed_word == word:
        print(f"You have guessed the word {word} correctly and won the game!")
        is_answer_correct = True
        break
    print("Your guess is not correct.")
if not is_answer_correct:
    print(f"Game over. The correct word was: {word}")
