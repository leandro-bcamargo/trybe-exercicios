import csv

with open("graduacao_unb.csv", "r", encoding="utf-8") as file:
    graduacao_reader = csv.DictReader(file, delimiter=",", quotechar='"')
    group_by_department = {}
    for row in graduacao_reader:
        department = row["unidade_responsavel"]
        if department not in group_by_department:
            group_by_department[department] = 0
        group_by_department[department] += 1
