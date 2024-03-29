import Link from 'next/link';
import * as React from 'react';

export interface IDetail2Props {}

export default function Detail2(props: IDetail2Props) {
  return (
    <div>
      <div className='py-24'>
        <div className='container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12'>
          <div className='lg:col-span-7'>
            <div className='mb-12 lg:mb-0 xl:mr-14'>
              <img className='inline' src='/images/details-2.jpg' alt='alternative' />
            </div>
          </div>
          {/* <!-- end of col --> */}
          <div className='lg:col-span-5'>
            <div className='xl:mt-12'>
              <h2 className='mb-6'>Instant results for the marketing department</h2>
              <ul className='list mb-7 space-y-2'>
                <li className='flex'>
                  <i className='fas fa-chevron-right'></i>
                  <div>Features that will help you and your marketers</div>
                </li>
                <li className='flex'>
                  <i className='fas fa-chevron-right'></i>
                  <div>Smooth learning curve due to the knowledge base</div>
                </li>
                <li className='flex'>
                  <i className='fas fa-chevron-right'></i>
                  <div>Ready out-of-the-box with minor setup settings</div>
                </li>
              </ul>
              <Link className='btn-solid-reg popup-with-move-anim mr-1.5' href='#details-lightbox'>
                Lightbox
              </Link>
              <Link className='btn-outline-reg' href='/article'>
                Details
              </Link>
            </div>
          </div>
          {/* <!-- end of col --> */}
        </div>
        {/* <!-- end of container --> */}
      </div>
    </div>
  );
}
