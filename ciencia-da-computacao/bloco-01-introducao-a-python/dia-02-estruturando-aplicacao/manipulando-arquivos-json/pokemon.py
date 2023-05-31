import json

with open("pokemons.json") as file:
    # content = file.read()
    # pokemons = json.loads(file)["results"]
    pokemons = json.load(file)["results"]

grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

print(grass_type_pokemons)

with open("grass_pokemons.json", "w") as file:
    # json_to_write = json.dumps(grass_type_pokemons)
    # file.write(json_to_write)
    json.dump(grass_type_pokemons, file)
