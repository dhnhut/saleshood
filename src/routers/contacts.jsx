import { UserPlusIcon } from '@heroicons/react/16/solid';
import ContactsList from '../components/contact/ContactsList';

const contacts = [
  {
    avatarUrl: '/images/avatar-1.jpg',
    name: 'John Michael',
    role: 'Executive',
    email: 'john@mui.com',
    phoneNumber: '(908) 756-4541',
    note: 'CEO',
  },
  {
    avatarUrl: '/images/avatar-2.jpg',
    name: 'Alexa Liras',
    role: 'Designer',
    email: 'alexa@mui.com',
    phoneNumber: '(517) 646-8322',
    note: 'Key developer',
  },
  {
    avatarUrl: '/images/avatar-3.jpg',
    name: 'Laurent Perrier',
    role: 'Developer',
    email: 'laurent@mui.com',
    phoneNumber: '(309) 833-2399',
    note: '',
  },
  {
    avatarUrl: '/images/avatar-4.jpg',
    name: 'Michael Levi',
    role: 'QC',
    email: 'michael@mui.com',
    phoneNumber: '(918) 321-9421',
    Note: '',
  },
];

export default function Contacts() {
  return (
    <div className='max-w-[1080px] mx-auto'>
      <div className='block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]'>
        <a
          target='_blank'
          href='https://www.material-tailwind.com/docs/html/table'
          className='block w-full px-4 py-2 text-center text-slate-700 transition-all '
        >
          <b>Contact List</b>
        </a>
      </div>

      <div className='relative flex flex-col w-full h-full text-slate-700 bg-white shadow rounded-xl border-gray-100 border'>
        <div className='relative mx-4 mt-4 overflow-hidden text-slate-700 bg-white rounded-none'>
          <div className='flex items-center justify-between '>
            <div>
              <h3 className='text-lg font-semibold text-slate-800'>
                Employees List
              </h3>
              <p className='text-slate-500'>Review each person before edit</p>
            </div>
            <div className='flex flex-col gap-2 shrink-0 sm:flex-row'>
              {/* <button
                className='rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                type='button'
              >
                View All
              </button> */}
              <button
                className='flex select-none items-center gap-2 rounded bg-slate-800 py-2.5 px-4 text-xs font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                type='button'
              >
                <UserPlusIcon className='w-4 h-4' />
                Add member
              </button>
            </div>
          </div>
        </div>
        <ContactsList contacts={contacts} />
      </div>
    </div>
  );
}
