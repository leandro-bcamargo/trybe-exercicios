import requests

response = requests.get("https://api.github.com/users")
data = response.json()

for user in data:
    print(f"{user['login']} {user['html_url']}")
