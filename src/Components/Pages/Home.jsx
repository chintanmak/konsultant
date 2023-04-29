import React from 'react';
import '../Scss/_home.scss';

import headerbg from '../Assets/headerimg.jpg';
import personpic from '../Assets/personpic.jpeg';

export default function Home() {
  return (
    <>
      <div className='header_container'>
      <div className='header_section'>
        <img src={headerbg} />
        <div className='header_title'>
          <h2>A SUCCESSFUL STRATEGY FOR YOUR BUSINESS</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <button>VIEW CASE STUDIES</button>
        </div>
        </div>
      </div>

      <div className='advice_container'>
        <div className='advice_texts'>
          <h2>YOU NEED THE BEST ADVICE</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <button>READ MORE</button>
        </div>
      </div>
    </>
  )
}
