import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid';

export default function ContactRow({ contact }) {
  return (
    <tr>
      <td className='p-4 border-b border-slate-200'>
        <div className='flex items-center gap-3'>
          <img
            src={contact.avatarUrl}
            alt={contact.name}
            className='relative inline-block h-9 w-9 !rounded-full object-cover object-center'
          />
          <div className='flex flex-col'>
            <p className='text-sm font-semibold text-slate-700'>
              {contact.name}
            </p>
            <p className='text-sm text-slate-500'>{contact.role}</p>
          </div>
        </div>
      </td>
      <td className='p-4 border-b border-slate-200'>
        <div className='flex flex-col'>
          <p className='text-sm text-slate-500'>{contact.email}</p>
        </div>
      </td>
      <td className='p-4 border-b border-slate-200'>
        <div className='w-max'>
          <p className='text-sm text-slate-500'>{contact.phoneNumber}</p>
        </div>
      </td>
      <td className='p-4 border-b border-slate-200'>
        <p className='text-sm text-slate-500'>{contact.note}</p>
      </td>
      <td className='p-4 border-b border-slate-200 w-28'>
        <button
          className='relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-teal-100 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          type='button'
        >
          <span className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
            <PencilIcon className='w-4 h-4' />
          </span>
        </button>
        <button
          className='relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-red-100 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          type='button'
        >
          <span className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
            <TrashIcon className='w-4 h-4' />
          </span>
        </button>
      </td>
    </tr>
  );
}
