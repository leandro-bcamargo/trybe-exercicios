from typing import List


class Contact:
    def __init__(self, name: str, email: str) -> None:
        self.name: str = name
        self.email: str = email


class ContactList:
    def __init__(self) -> None:
        self.contacts: List[Contact] = []
        self.favorites: List[Contact] = []

    def add_contact(self, contact: Contact):
        self.contacts.append(contact)

    def remove_contact(self, name: str):
        for contact in self.contacts:
            if contact.name == name:
                self.contacts.remove(contact)
                return

        raise LookupError("Can't remove contact: Name not found")

    def add_to_favorites(self, name: str):
        for contact in self.contacts:
            if contact.name == name:
                favorite = contact
                self.contacts.remove(favorite)
                self.favorites.append(favorite)
                return

        raise LookupError("Can't add to favorites: Name not found")

    def remove_from_favorites(self, name: str):
        for favorite in self.favorites:
            if favorite.name == name:
                contact = favorite
                self.favorites.remove(contact)
                self.contacts.append(contact)
                return

        raise LookupError("Can't remove from favorites: Name not found")


leandro = Contact("leandro", "leandro@email.com")
lucas = Contact("lucas", "lucas@email.com")
contact_list = ContactList()
contact_list.add_contact(leandro)
# contact_list.remove_contact("lucas")
# contact_list.add_to_favorites("lucas")
# contact_list.remove_contact("lucas")
contact_list.add_to_favorites("leandro")
print("contacts:", contact_list.contacts)
print("favorites:", contact_list.favorites)
contact_list.remove_from_favorites("leandro")
print("contacts:", contact_list.contacts)
print("favorites:", contact_list.favorites)
contact_list.remove_contact("leandro")
print("contacts:", contact_list.contacts)
print("favorites:", contact_list.favorites)
