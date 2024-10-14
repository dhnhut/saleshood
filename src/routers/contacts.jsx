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
    <>
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
      <button
        data-modal-target='default-modal'
        data-modal-toggle='default-modal'
        className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        type='button'
      >
        Toggle modal
      </button>
      <div
        id='default-modal'
        tabindex='-1'
        aria-hidden='true'
        className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
      >
        <div className='relative p-4 w-full max-w-2xl max-h-full'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Terms of Service
              </h3>
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-hide='default-modal'
              >
                <svg
                  className='w-3 h-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 14'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                  />
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            <div className='p-4 md:p-5 space-y-4'>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
            <div className='flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600'>
              <button
                data-modal-hide='default-modal'
                type='button'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                I accept
              </button>
              <button
                data-modal-hide='default-modal'
                type='button'
                className='py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
