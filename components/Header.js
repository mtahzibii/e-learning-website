import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Image from 'next/image';

function Header() {
 const { user, logout } = useContext(AuthContext);

 return (
  <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  border-bottom px-5'>
   {/* <a
    href='/'
    className='d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none'
   >
    <img src='/logo.jpg' alt='logo' width='120px' />
   </a> */}

   <Link href='/'>
    <Image alt='logo' src='/logo.jpg' width={80} height={50} />
   </Link>

   <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 gap-4'>
    <li>
     <a href='#' className='nav-link px-2 link-dark'>
      Home
     </a>
    </li>
    <li>
     <a href='#' className='nav-link px-2 link-dark'>
      All Course
     </a>
    </li>
    <li>
     <a href='#' className='nav-link px-2 link-dark'>
      Pages
     </a>
    </li>
    <li>
     <a href='#' className='nav-link px-2 link-dark'>
      Blog
     </a>
    </li>
    <li>
     <a href='#' className='nav-link px-2 link-dark'>
      Contact
     </a>
    </li>
   </ul>

   <div className='col-md-3 text-end'>
    {!user ? (
     <>
      <Link href='/accounts/login' className='btn btn-outline-primary me-3'>
       Login
      </Link>

      <Link href='/accounts/register' className='btn btn-outline-primary me-3'>
       Sign-up
      </Link>
     </>
    ) : (
     <>
      <Link
       href='/accounts/dashboard'
       className='btn btn-outline-success me-3  bg-success text-white'
      >
       Dashboard
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
