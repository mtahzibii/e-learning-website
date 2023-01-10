import React from 'react';

function Footer() {
 return (
  <div class='container'>
   <footer class='py-5'>
    <div class='row'>
     <div class='col-2'>
      <h5>Section</h5>
      <ul class='nav flex-column'>
       <li class='nav-item mb-2'>
        <a href='#' class='nav-link p-0 text-muted'>
         Home
        </a>
       </li>
       <li class='nav-item mb-2'>
        <a href='#' class='nav-link p-0 text-muted'>
         Features
        </a>
       </li>
       <li class='nav-item mb-2'>
        <a href='#' class='nav-link p-0 text-muted'>
         Pricing
        </a>
       </li>
       <li class='nav-item mb-2'>
        <a href='#' class='nav-link p-0 text-muted'>
         FAQs
        </a>
       </li>
       <li class='nav-item mb-2'>
        <a href='#' class='nav-link p-0 text-muted'>
         About
        </a>
       </li>
      </ul>
     </div>

     <div class='col-2'>
      <h5>Section</h5>
      <ul class='nav flex-column'>
       <li class='nav-item mb-2'>
        <a href='#' class='nav-link p-0 text-muted'>
         Home
        </a>
       </li>
       <li class='nav-item mb-2'>
        <a href='#' class='nav-link p-0 text-muted'>
         Features
        </a>
       </li>
       <li class='nav-item mb-2'>
        <a href='#' class='nav-link p-0 text-muted'>
         Pricing
        </a>
       </li>
       <li class='nav-item mb-2'>
        <a href='#' class='nav-link p-0 text-muted'>
         FAQs
        </a>
       </li>
       <li class='nav-item mb-2'>
        <a href='#' class='nav-link p-0 text-muted'>
         About
        </a>
       </li>
      </ul>
     </div>

     <div class='col-2'>
      <h5>Section</h5>
      <ul class='nav flex-column'>
       <li class='nav-item mb-2'>
        <a href='#' class='nav-link p-0 text-muted'>
         Home
        </a>
       </li>
       <li class='nav-item mb-2'>
        <a href='#' class='nav-link p-0 text-muted'>
         Features
        </a>
       </li>
       <li class='nav-item mb-2'>
        <a href='#' class='nav-link p-0 text-muted'>
         Pricing
        </a>
       </li>
       <li class='nav-item mb-2'>
        <a href='#' class='nav-link p-0 text-muted'>
         FAQs
        </a>
       </li>
       <li class='nav-item mb-2'>
        <a href='#' class='nav-link p-0 text-muted'>
         About
        </a>
       </li>
      </ul>
     </div>

     <div class='col-4 offset-1'>
      <form>
       <h5>Subscribe to our newsletter</h5>
       <p>Monthly digest of whats new and exciting from us.</p>
       <div class='d-flex w-100 gap-2'>
        <label for='newsletter1' class='visually-hidden'>
         Email address
        </label>
        <input
         id='newsletter1'
         type='text'
         class='form-control'
         placeholder='Email address'
        />
        <button class='btn btn-primary' type='button'>
         Subscribe
        </button>
       </div>
      </form>
     </div>
    </div>

    <div class='d-flex justify-content-around py-4 my-4 border-top '>
     <p>© 2021 Company, Inc. All rights reserved.</p>
     <div class='d-flex gap-4 social mb-2 '>
      <a href='https://twitter.com'>
       <i class='fab fa-twitter fa-2x'></i>
      </a>
      <a href='https://www.youtube.com'>
       <i class='fab fa-youtube fa-2x'></i>
      </a>
      <a href='https://www.instagram.com'>
       <i class='fab fa-instagram fa-2x'></i>
      </a>
      <a href='https://www.linkedin.com/'>
       <i class='fab fa-linkedin fa-2x  '></i>
      </a>
     </div>
    </div>
   </footer>
  </div>
 );
}

export default Footer;