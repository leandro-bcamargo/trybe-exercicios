def study_schedule(permanence_period, target_time):
    counter = 0
    for student in permanence_period:
        if target_time in range(student[0], student[1] + 1):
            counter += 1

    return counter


print(study_schedule([(9, 12), (11, 13), (7, 12), (10, 15)], 12))
