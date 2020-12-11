/* eslint-disable no-shadow */
const contacts = [
  {
    name: "Tom",
    phoneNumber: "666-66-66",
  },
  {
    name: "Bob",
    phoneNumber: "777-77-77",
  },
  {
    name: "John",
    phoneNumber: "333-33-33",
  },
  {
    name: "Ann",
    phoneNumber: "555-55-55",
  },
];

function sortContacts(contacts, isAsc) {
  if (Array.isArray(contacts)) {
    return contacts.sort((a, b) =>
      isAsc === false
        ? b.name.localeCompare(a.name)
        : a.name.localeCompare(b.name)
    );
  }
  return null;
}
console.log(sortContacts(contacts, false));
