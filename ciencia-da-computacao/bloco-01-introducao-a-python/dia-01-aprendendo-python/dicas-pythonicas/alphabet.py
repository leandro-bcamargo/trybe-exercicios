vowels = "aeiou"

sentence = (
    "O modulo de CS e bom demais, "
    "as dicas pythonicas fazem ficar melhor ainda."
)

sentence_vowels = {
    letter: sentence.count(letter) for letter in sentence if letter in vowels
}
sentence_consonants = [
    letter for letter in sentence if (letter not in vowels and letter != " ")
]


print(sentence_vowels)
print(sentence_consonants)
