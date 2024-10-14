import ContactRow from './ContactRow';
import ContactsListHeader from './ContactsListHeader';
import { getContacts } from '../../ultilities/contactsStorage';
import { useState, useEffect } from 'react';

export default function ContactsList() {
  const [contacts, setContacts] = useState(getContacts());
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('');

  const refreshContacts = () => {
    setContacts(getContacts());
  };

  const onSort = (field, direction) => {
    setSortField(field);
    setSortDirection(direction);
    setContacts(getContacts(field, direction));
  };

  const fields = ['fullName', 'email', 'phoneNumber', 'note'];
  const texts = ['Full Name', 'Email', 'Phone Number', 'Note'];

  return (
    <>
      <div className='p-0 overflow-scroll'>
        <table className='w-full mt-4 text-left table-auto min-w-max'>
          <thead>
            <tr>
              {fields.map((f, i) => {
                return (
                  <ContactsListHeader
                    key={f}
                    field={f}
                    text={texts[i]}
                    sortField={sortField}
                    sortDirection={sortDirection}
                    onSort={onSort}
                  />
                );
              })}
              <th className='p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100'></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => {
              return (
                <ContactRow
                  key={c.uuid}
                  contact={c}
                  refreshContacts={refreshContacts}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
