from faker import Faker

faker = Faker(locale="pt-BR")

Faker.seed(0)

print(faker.name())
print(faker.phone_number())
print(faker.cpf())

faker_ar = Faker(locale="es-AR")

print(faker_ar.name())
print(faker_ar.email())
print(faker_ar.password())
print(faker_ar.url())
print(faker_ar.license_plate())
