import Image from 'next/image';

function Header() {
 return (
  <header class='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom px-5'>
   <a
    href='/'
    class='d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none'
   >
    <img src='/logo.jpg' alt='logo' width='120px' />
   </a>

   <ul class='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 gap-4'>
    <li>
     <a href='#' class='nav-link px-2 link-dark'>
      Home
     </a>
    </li>
    <li>
     <a href='#' class='nav-link px-2 link-dark'>
      All Course
     </a>
    </li>
    <li>
     <a href='#' class='nav-link px-2 link-dark'>
      Pages
     </a>
    </li>
    <li>
     <a href='#' class='nav-link px-2 link-dark'>
      Blog
     </a>
    </li>
    <li>
     <a href='#' class='nav-link px-2 link-dark'>
      Contact
     </a>
    </li>
   </ul>

   <div class='col-md-3 text-end'>
    <button type='button' class='btn btn-outline-primary me-3'>
     Login
    </button>
    <button type='button' class='btn btn-primary'>
     Sign-up
    </button>
   </div>
  </header>
 );
}

export default Header;
