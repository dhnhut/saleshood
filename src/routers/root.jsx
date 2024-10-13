import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { UpperClipPath, LowerClipPath } from '../components/Decorations';

export default function Root() {
  return (
    <div className='bg-white'>
      <Header />
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <UpperClipPath />
        <Outlet />
        <LowerClipPath />
      </div>
    </div>
  );
}
