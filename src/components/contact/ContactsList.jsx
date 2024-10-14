import {
  ChevronUpIcon,
  ChevronDownIcon,
} from '@heroicons/react/16/solid';
import ContactRow from './ContactRow';
import ContactsListPagination from './ContactsListPagination';

export default function ContactsList({ contacts = [] }) {
  return (
    <>
      <div className='p-0 overflow-scroll'>
        <table className='w-full mt-4 text-left table-auto min-w-max'>
          <thead>
            <tr>
              <th className='p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100'>
                <p className='flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500'>
                  Name
                  <ChevronDownIcon className='w-4 h-4' />
                </p>
              </th>
              <th className='p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100'>
                <p className='flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500'>
                  Email
                </p>
              </th>
              <th className='p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100'>
                <p className='flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500'>
                  Phone number
                </p>
              </th>
              <th className='p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100'>
                <p className='flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500'>
                  Note
                </p>
              </th>
              <th className='p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100'>
                <p className='flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500'></p>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              contacts.map(c => {
                return (
                  <ContactRow key={c.email} contact={c} />
                )
              })
            }
          </tbody>
        </table>
      </div>
      <ContactsListPagination />
    </>
  );
}
