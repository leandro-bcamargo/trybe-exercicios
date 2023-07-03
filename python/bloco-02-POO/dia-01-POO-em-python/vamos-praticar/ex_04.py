class Car:
    def __init__(self, model: str, year: int, speed: int) -> None:
        self.model = model
        self.year = year
        self.speed = speed

    def accelerate(self, acceleration: int):
        self.speed += acceleration
        return "The car model {}, year {}, has accelerated {}km/h to {}km/h".format(
            self.model, self.year, acceleration, self.speed
        )

    def decelerate(self, deceleration: int):
        self.speed -= deceleration
        return "The car model {}, year {}, has accelerated {}km/h to {}km/h".format(
            self.model, self.year, deceleration, self.speed
        )


car = Car("Ford-T", 1920, 50)
print(car.accelerate(10))
print(car.decelerate(20))
