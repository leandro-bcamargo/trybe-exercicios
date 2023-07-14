s = "ayunxikm"
alphabet = "abcdefghijklmnopqrstuvwxyz"
longest_string = s[0]
curr_string = s[0]
for i in range(1, len(s)):
    if alphabet.index(s[i]) >= alphabet.index(curr_string[-1]):
        curr_string += s[i]
    else:
        curr_string = s[i]
    if len(curr_string) > len(longest_string):
        longest_string = curr_string


print("Longest substring in alphabetical order is: " + longest_string)
