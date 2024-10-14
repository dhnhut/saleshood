import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { createContact } from '../ultilities/contactsStorage';

export default function ContactForm({ contact = {} }) {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (newContact) => {
    newContact.uuid = self.crypto.randomUUID();
    createContact(newContact);
    navigate("/contacts");
  };

  return (
    <div className='isolate px-6 py-24 sm:py-32 lg:px-8'>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Contact{' '}
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto mt-16 max-w-xl sm:mt-20'
      >
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div>
            <label
              htmlFor='first-name'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Full Name <span className='text-red-500 text-xs italic'>*</span>
            </label>
            <div className='mt-2.5'>
              <input
                {...register('fullName', { required: true, maxLength: 50 })}
                aria-invalid={errors.fullName ? 'true' : 'false'}
                type='text'
                autoComplete='given-name'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
              {errors.fullName?.type === 'required' && (
                <p className='text-red-500 text-xs italic'>
                  Full name is required.
                </p>
              )}
              {errors.fullName?.type === 'maxLength' && (
                <p className='text-red-500 text-xs italic'>
                  Max 50 characters.
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor='last-name'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Role
            </label>
            <div className='mt-2.5'>
              <input
                {...register('role')}
                type='text'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='company'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Avatar URL
            </label>
            <div className='mt-2.5'>
              <input
                {...register('avatarUrl')}
                type='text'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Email <span className='text-red-500 text-xs italic'>*</span>
            </label>
            <div className='mt-2.5'>
              <input
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/i,
                })}
                type='email'
                autoComplete='email'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
              {errors.email?.type === 'required' && (
                <p className='text-red-500 text-xs italic'>
                  Email is required.
                </p>
              )}
              {errors.email?.type === 'pattern' && (
                <p className='text-red-500 text-xs italic'>
                  Please input valid email.
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor='phone-number'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Phone number{' '}
              <span className='text-red-500 text-xs italic'>*</span>
            </label>
            <div className='mt-2.5'>
              <input
                {...register('phoneNumber', {
                  required: true,
                  pattern: /^\+?[0-9]+$/i,
                })}
                type='text'
                placeholder='123456789'
                autoComplete='phone-number'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
              {errors.phoneNumber?.type === 'required' && (
                <p className='text-red-500 text-xs italic'>
                  Phone Number is required.
                </p>
              )}
              {errors.phoneNumber?.type === 'pattern' && (
                <p className='text-red-500 text-xs italic'>
                  Please input valid Phone number.
                </p>
              )}
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              Note
            </label>
            <div className='mt-2.5'>
              <textarea
                {...register('note')}
                rows={4}
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <button
            type='submit'
            className='block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
