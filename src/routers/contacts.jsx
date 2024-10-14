import { UserPlusIcon } from '@heroicons/react/16/solid';
import { useNavigate } from "react-router-dom";

import ContactsList from '../components/contact/ContactsList';

export default function Contacts() {
  let navigate = useNavigate(); 
  const AddContactBtnOnClick = () => {
    navigate("/contacts/new");
  };

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
              <button
                onClick={AddContactBtnOnClick}
                className='flex select-none items-center gap-2 rounded bg-slate-800 py-2.5 px-4 text-xs font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20'
                type='button'
              >
                <UserPlusIcon className='w-4 h-4' />
                Add member
              </button>
            </div>
          </div>
        </div>
        <ContactsList />
      </div>
    </div>
  );
}
