import { CheckIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
const requirements = [
  'Use an executable environment such as codesandbox, jsfiddle, codepen, etc.',
  'Something that is fully executable so we can view the code and run it',
  'Create a react app',
  'Create a custom route with a specific page (use any library you want)',
  'Create a react component with input and submit button to add an item to a list',
  'Display the list after submitting and allow user to enter more items',
  'Allow user to sort list',
  'Style the UI using CSS or LESS or anything that is cascading',
];

export default function LandingPage() {
  return (
    <div className='mx-auto max-w-2xl py-16'>
      <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
        <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
          Full Stack/Front End Code Challenge
        </div>
      </div>
      <h1 className='text-center text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
        Contacts Management
      </h1>
      <div className='pr-16 pl-16'>
        <h2 className='mt-16 text-lg leading-8 text-gray-600'>Requirements</h2>
        <ul
          role='list'
          className='text-gray-600 space-y-2 text-sm leading-6 mt-4'
        >
          {requirements.map((requirement) => (
            <li key={requirement} className='flex gap-x-3'>
              <CheckIcon
                aria-hidden='true'
                className={'text-green-600 h-6 w-5 flex-none'}
              />
              {requirement}
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-10 flex items-center justify-center gap-x-6'>
        <Link
          to='/contacts'
          className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Get started
        </Link>
      </div>
    </div>
  );
}
