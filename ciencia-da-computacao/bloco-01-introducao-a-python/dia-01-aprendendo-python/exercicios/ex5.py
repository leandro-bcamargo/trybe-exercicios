def calculate_buckets(wall_area):
    price_per_bucket = 80
    liters_in_bucket = 18
    sqr_meters_per_liter = 3
    buckets = (wall_area // (sqr_meters_per_liter * liters_in_bucket)) + 1
    total_price = price_per_bucket * buckets
    return (buckets, total_price)


print(calculate_buckets(100))
