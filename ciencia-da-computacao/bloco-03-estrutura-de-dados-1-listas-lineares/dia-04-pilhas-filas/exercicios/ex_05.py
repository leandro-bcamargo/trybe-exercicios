from ex_02 import Stack

garage = Stack()

option = 0

while option != 4:
    print("Operations: ")
    print("1. Add vehicle")
    print("2. Remove vehicle")
    print("3. Parked vehicles")
    print("4. Close the program")
    option = int(input("Option: "))

    if option == 1:
        plate_number = input("Plate number: ")
        garage.push(plate_number)
        print(f"Vehicle {plate_number} parked")

    elif option == 2:
        plate_number = input("Plate number: ")
        street = Stack()

        garage_original_length = len(garage._data)

        removed_vehicle = garage.pop()
        street.push(removed_vehicle)
        print("removed_vehicle:", removed_vehicle)

        while removed_vehicle.value != plate_number and not garage.is_empty():
            removed_vehicle = garage.pop()
            street.push(removed_vehicle)
            print(f"Vehicle {removed_vehicle} removed")

        while not street.is_empty():
            vehicle_to_return = street.pop()
            if vehicle_to_return.value != plate_number:
                garage.push(vehicle_to_return)

        print(f"Vehicle {removed_vehicle} successfully recovered")

        if len(garage._data) == garage_original_length:
            print("There is no vehicle parked with this plate")

    elif option == 3:
        print(f"Parked vehicles: {garage}")

    else:
        print("Exited")
        option = 4
