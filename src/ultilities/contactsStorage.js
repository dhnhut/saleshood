const sampleContacts = [
  {
    uuid: '1',
    avatarUrl: '/images/avatar-1.jpg',
    fullName: 'John Michael',
    role: 'Executive',
    email: 'john@mui.com',
    phoneNumber: '(908) 756-4541',
    note: 'CEO',
  },
  {
    uuid: '2',
    avatarUrl: '/images/avatar-2.jpg',
    fullName: 'Alexa Liras',
    role: 'Designer',
    email: 'alexa@mui.com',
    phoneNumber: '(517) 646-8322',
    note: 'Key developer',
  },
  {
    uuid: '3',
    avatarUrl: '/images/avatar-3.jpg',
    fullName: 'Laurent Perrier',
    role: 'Developer',
    email: 'laurent@mui.com',
    phoneNumber: '(309) 833-2399',
    note: '',
  },
  {
    uuid: '4',
    avatarUrl: '/images/avatar-4.jpg',
    fullName: 'Michael Levi',
    role: 'QC',
    email: 'michael@mui.com',
    phoneNumber: '(918) 321-9421',
    Note: '',
  },
];

const saveContacts = (contacts) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

export function getContacts() {
  return JSON.parse(localStorage.getItem('contacts'));
}

export function createContact(contact) {
  let contacts = getContacts();
  contacts.push(contact);
  saveContacts(contacts)
}

export function getContact(uuid) {
  let contacts = getContacts();
  let contact = contacts.find((contact) => contact.uuid === uuid);
  return contact ?? null;
}

export function deleteContact(uuid) {
  let contacts = getContacts();
  let index = contacts.findIndex((contact) => contact.uuid === uuid);
  if (index > -1) {
    contacts.splice(index, 1);
    saveContacts(contacts);
    return true;
  }
  return false;
}

if (!getContacts()?.length) {
  saveContacts(sampleContacts);
}
