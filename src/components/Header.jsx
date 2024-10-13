const navigation = [
  { name: 'Home Page', href: '/' },
  { name: 'Contacts', href: '/contacts' },
];

export default function Header() {
  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav
        aria-label='Global'
        className='flex items-center justify-between p-6 lg:px-8'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img
              alt=''
              src='https://saleshood.com/wp-content/themes/saleshood/assets/src/img/logo.png'
              className='h-5 w-auto'
            />
          </a>
        </div>
        <div className='flex gap-x-12'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
