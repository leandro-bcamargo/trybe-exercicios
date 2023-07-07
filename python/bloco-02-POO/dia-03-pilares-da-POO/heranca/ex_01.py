class Vehicle:
    def __init__(self, name: str, capacity: int) -> None:
        self.name = name
        self.capacity = capacity

    def move(self, distance: int) -> str:
        return (
            f"{self.name} carried {self.capacity} "
            f"people across {distance} kilometers."
        )


class Car(Vehicle):
    def __init__(self, name: str, capacity: int) -> None:
        super().__init__(name, capacity)

    def move(self, distance: int):
        return f"A car named {super().move(distance)}"


class Motorcycle(Vehicle):
    def __init__(self, name: str) -> None:
        super().__init__(name, 2)


car = Car("Palio", 4)
motorcycle = Motorcycle("Yamaha")

print(car.move(100))
print(motorcycle.move(100))
