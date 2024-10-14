export default function ContactsListPagination({
  total = 0,
  current = 0,
  perPage = 10,
}) {
  return (
    <div className='flex items-center justify-between p-3'>
      <p className='block text-sm text-slate-500'>Page {current} of {total}, {perPage} row per page</p>
      <div className='flex gap-1'>
        <button
          className='rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          type='button'
        >
          Previous
        </button>
        <button
          className='rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          type='button'
        >
          Next
        </button>
      </div>
    </div>
  );
}
