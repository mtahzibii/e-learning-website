import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Image from 'next/image';

function Header() {
 const { user, logout } = useContext(AuthContext);

 return (
  <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  border-bottom px-5'>
   <Link href='/'>
    <Image alt='logo' src='/logo.jpg' width={110} height={40} />
   </Link>

   <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 gap-4'>
    <li>
     <Link href='/' className='nav-link px-2 link-dark'>
      Home
     </Link>
    </li>
    <li>
     <Link href='/courses' className='nav-link px-2 link-dark'>
      All Courses
     </Link>
    </li>
    <li>
     <Link href='/blog' className='nav-link px-2 link-dark'>
      Blog
     </Link>
    </li>
    <li>
     <Link href='/contact' className='nav-link px-2 link-dark'>
      Contact
     </Link>
    </li>
   </ul>

   <div className='d-flex '>
    {!user ? (
     <>
      <Link href='/accounts/login' className='btn btn-outline-success me-3'>
       Login
      </Link>

      <Link
       href='/accounts/register'
       className='btn btn-outline-success bg-success me-3 text-light'
      >
       Sign-up
      </Link>
     </>
    ) : (
     <>
      <Link
       href='/accounts/dashboard'
       className='btn btn-outline-success me-3  bg-success text-white'
      >
       My Dashboard
      </Link>
      <button className='btn btn-outline-danger me-3' onClick={() => logout()}>
       Logout
      </button>
     </>
    )}
   </div>
  </header>
 );
}

export default Header;
