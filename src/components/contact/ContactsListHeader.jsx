import PropTypes from 'prop-types';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid';

export default function ContactsListHeader({
  field,
  text,
  sortField,
  sortDirection,
  onSort,
}) {
  const isAsc = sortDirection === 'asc';
  const handleSort = () => {
    if (onSort) {
      const newDirection = isAsc ? 'desc' : 'asc';
      onSort(field, newDirection);
    }
  };
  return (
    <th
      onClick={handleSort}
      className='p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100'
    >
      <p className='flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500'>
        {text}
        {field === sortField && (
          <>
            {isAsc && <ChevronUpIcon className='w-4 h-4' />}
            {!isAsc && <ChevronDownIcon className='w-4 h-4' />}
          </>
        )}
      </p>
    </th>
  );
}

ContactsListHeader.propTypes = {
  field: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  sortField: PropTypes.string,
  sortDirection: PropTypes.oneOf(['asc', 'desc', '']),
  onSort: PropTypes.func,
};
