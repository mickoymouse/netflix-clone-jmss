import Link from 'next/link';
import { MagnifyingGlassIcon, BellIcon, PhotoIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className='z-50 sticky top-0 flex items-center bg-gradient-to-b from-black to-transparent via-opacity-70 px-6 py-4'>
      <div className='mx-6'>
        <Link href="/">
          <span className='text-netflix-red text-2xl transform skew-x-90'>NETFLIX</span>
        </Link>
      </div>

      <div className='text-white text-sm flex justify-start items-center mr-auto'>
        <p className='mx-4 cursor-pointer hover:text-gray-500 transition-colors duration-300'>Home</p>
        <p className='mx-4 cursor-pointer hover:text-gray-500 transition-colors duration-300'>TV Shows</p>
        <p className='mx-4 cursor-pointer hover:text-gray-500 transition-colors duration-300'>Movies</p>
        <p className='mx-4 cursor-pointer hover:text-gray-500 transition-colors duration-300'>New &amp; Popular</p>
        <p className='mx-4 cursor-pointer hover:text-gray-500 transition-colors duration-300'>My List</p>
        <p className='mx-4 cursor-pointer hover:text-gray-500 transition-colors duration-300'>Browse by Languages</p>
        
      </div>

      <div className='text-white text-sm flex justify-end items-center space-x-5'>
        <MagnifyingGlassIcon className='h-6' />
        <BellIcon className='h-6' />
        <PhotoIcon className='h-6' />
      </div>
    </nav>
  );
};

export default Navbar;
