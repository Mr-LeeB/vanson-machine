/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <>
      {/* <!-- Navigation --> */}
      <nav className='navbar fixed-top'>
        <div className='container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap'>
          {/* <!-- Text Logo - Use this if you don't have a graphic logo --> */}
          {/* <!-- <Link className="text-gray-800 font-semibold text-3xl leading-4 no-underline page-scroll" href="index">Pavo</Link> --> */}

          {/* <!-- Image Logo --> */}
          <Link
            className='inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline'
            href='/'>
            <img src='images/logo.svg' alt='alternative' className='h-8' />
          </Link>

          <button
            className='background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400'
            type='button'
            data-toggle='offcanvas'>
            <span className='navbar-toggler-icon inline-block w-8 h-8 align-middle'></span>
          </button>

          <div
            className='navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center'
            id='navbarsExampleDefault'>
            <ul className='pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row'>
              <li>
                <Link className='nav-link page-scroll active' href='#home'>
                  Home <span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li>
                <Link className='nav-link page-scroll' href='#features'>
                  Features
                </Link>
              </li>
              <li>
                <Link className='nav-link page-scroll' href='#details'>
                  Details
                </Link>
              </li>
              <li>
                <Link className='nav-link page-scroll' href='#pricing'>
                  Pricing
                </Link>
              </li>
              <li className='dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='dropdown01'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  Drop
                </Link>
                <div className='dropdown-menu' aria-labelledby='dropdown01'>
                  <Link className='dropdown-item' href='/article'>
                    Article Details
                  </Link>
                  <div className='dropdown-divider'></div>
                  <Link className='dropdown-item' href='/terms'>
                    Terms Conditions
                  </Link>
                  <div className='dropdown-divider'></div>
                  <Link className='dropdown-item' href='/privacy'>
                    Privacy Policy
                  </Link>
                </div>
              </li>
              <li>
                <Link className='nav-link page-scroll' href='#download'>
                  Download
                </Link>
              </li>
            </ul>
            <span className='block lg:ml-3.5'>
              <Link className='no-underline' href='#your-link'>
                <i className='fab fa-apple text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5'></i>
              </Link>
              <Link className='no-underline' href='#your-link'>
                <i className='fab fa-android text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200'></i>
              </Link>
            </span>
          </div>
          {/* <!-- end of navbar-collapse --> */}
        </div>
        {/* <!-- end of container --> */}
      </nav>
      {/* <!-- end of navbar --> */}
      {/* <!-- end of navigation --> */}
    </>
  );
};

export default Navigation;
