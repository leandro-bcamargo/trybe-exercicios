def max_stability_period(periods):
    current_streak = 0
    max_streak = 0

    for period in periods:
        if period == 1:
            current_streak += 1
        else:
            if current_streak > max_streak:
                max_streak = current_streak

    return max_streak


print(max_stability_period([1, 1, 1, 0, 0, 1, 1]))
