def calculate_price(liters, fuel):
    price_per_liter = 2.5
    if (fuel == 'A'):
        if (liters <= 20):
            return price_per_liter * liters * .97
        return (((liters-20) * .95 * price_per_liter)
                + (20 * .97 * price_per_liter))
    if (fuel == 'G'):
        if (liters <= 20):
            return price_per_liter * liters * .96
        return (((liters-20) * .94 * price_per_liter)
                + (20 * .96 * price_per_liter))


print(calculate_price(30, 'A'))
print(calculate_price(30, 'G'))
