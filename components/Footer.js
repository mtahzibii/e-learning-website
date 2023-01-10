import React from 'react';

function Footer() {
 return (
  <div className='container'>
   <footer className='py-5'>
    <div className='row'>
     <div className='col-2'>
      <h5>Section</h5>
      <ul className='nav flex-column'>
       <li className='nav-item mb-2'>
        <a href='#' className='nav-link p-0 text-muted'>
         Home
        </a>
       </li>
       <li className='nav-item mb-2'>
        <a href='#' className='nav-link p-0 text-muted'>
         Features
        </a>
       </li>
       <li className='nav-item mb-2'>
        <a href='#' className='nav-link p-0 text-muted'>
         Pricing
        </a>
       </li>
       <li className='nav-item mb-2'>
        <a href='#' className='nav-link p-0 text-muted'>
         FAQs
        </a>
       </li>
       <li className='nav-item mb-2'>
        <a href='#' className='nav-link p-0 text-muted'>
         About
        </a>
       </li>
      </ul>
     </div>

     <div className='col-2'>
      <h5>Section</h5>
      <ul className='nav flex-column'>
       <li className='nav-item mb-2'>
        <a href='#' className='nav-link p-0 text-muted'>
         Home
        </a>
       </li>
       <li className='nav-item mb-2'>
        <a href='#' className='nav-link p-0 text-muted'>
         Features
        </a>
       </li>
       <li className='nav-item mb-2'>
        <a href='#' className='nav-link p-0 text-muted'>
         Pricing
        </a>
       </li>
       <li className='nav-item mb-2'>
        <a href='#' className='nav-link p-0 text-muted'>
         FAQs
        </a>
       </li>
       <li className='nav-item mb-2'>
        <a href='#' className='nav-link p-0 text-muted'>
         About
        </a>
       </li>
      </ul>
     </div>

     <div className='col-2'>
      <h5>Section</h5>
      <ul className='nav flex-column'>
       <li className='nav-item mb-2'>
        <a href='#' className='nav-link p-0 text-muted'>
         Home
        </a>
       </li>
       <li className='nav-item mb-2'>
        <a href='#' className='nav-link p-0 text-muted'>
         Features
        </a>
       </li>
       <li className='nav-item mb-2'>
        <a href='#' className='nav-link p-0 text-muted'>
         Pricing
        </a>
       </li>
       <li className='nav-item mb-2'>
        <a href='#' className='nav-link p-0 text-muted'>
         FAQs
        </a>
       </li>
       <li className='nav-item mb-2'>
        <a href='#' className='nav-link p-0 text-muted'>
         About
        </a>
       </li>
      </ul>
     </div>

     <div className='col-4 offset-1'>
      <form>
       <h5>Subscribe to our newsletter</h5>
       <p>Monthly digest of whats new and exciting from us.</p>
       <div className='d-flex w-100 gap-2'>
        <label htmlFor='newsletter1' className='visually-hidden'>
         Email address
        </label>
        <input
         id='newsletter1'
         type='text'
         className='form-control'
         placeholder='Email address'
        />
        <button className='btn btn-primary' type='button'>
         Subscribe
        </button>
       </div>
      </form>
     </div>
    </div>

    <div className='d-flex justify-content-around py-4 my-4 border-top '>
     <p>© 2023 Bugloos Inc. All rights reserved.</p>
     <div className='d-flex gap-4 social mb-2 '>
      <a href='https://twitter.com'>
       <i className='fab fa-twitter fa-2x'></i>
      </a>
      <a href='https://www.youtube.com'>
       <i className='fab fa-youtube fa-2x'></i>
      </a>
      <a href='https://www.instagram.com'>
       <i className='fab fa-instagram fa-2x'></i>
      </a>
      <a href='https://www.linkedin.com/'>
       <i className='fab fa-linkedin fa-2x  '></i>
      </a>
     </div>
    </div>
   </footer>
  </div>
 );
}

export default Footer;
