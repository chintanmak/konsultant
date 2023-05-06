import React from 'react';
import '../Scss/_home.scss';

import headerbg from '../Assets/headerimg.jpg';
import personpic from '../Assets/personpic.jpeg';

import chat from '../Assets/chat.png';
import paper from '../Assets/papers.png';
import customer from '../Assets/customer.png';
import dollar from '../Assets/dollar.png';
import calc from '../Assets/calc.png';
import estate from '../Assets/estate.png';
import downarrow from '../Assets/downarrow.png';
import meeting1 from '../Assets/meeting1.jpg';
import meeting2 from '../Assets/meeting2.jpg';
import person1 from '../Assets/person1.jpeg';
import person2 from '../Assets/person2.jpeg';

export default function Home() {
  return (
    <>
      <div className='header_container'>
        <img src={headerbg} />
        <div className='header_title'>
          <h2>A SUCCESSFUL STRATEGY FOR YOUR BUSINESS</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <button>VIEW CASE STUDIES</button>
        </div>
        </div>

      <div className='advice_container'>
        <div className='advice_texts'>
          <h2>YOU NEED THE BEST ADVICE</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <button>READ MORE</button>
        </div>
        <div className='advice_img'>
          <img src={personpic} />
        </div>
      </div>

      <div className='services_container'>
        <div className='services_title'>
          <h2>INDUSTRIES WE SERVE</h2>
          <img src={downarrow} />
        </div>
        <div className='services_section'>
          <div className='services_box1 borderbox1'>
            <img src={chat} />
            <h2>COMMUNICATIONS</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>

          <div className='services_box1 borderbox1'>
            <img src={paper} />
            <h2>AUDIT & EVALUATION</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>

          <div className='services_box1 borderbox2'>
            <img src={customer} />
            <h2>CONSUMER MARKETS</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>

          <div className='services_box1 borderbox3'>
            <img src={dollar} />
            <h2>FINANCIAL SERVICES</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>

          <div className='services_box1 borderbox3'>
            <img src={calc} />
            <h2>TAXES & EFFICENCY</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>

          <div className='services_box1'>
            <img src={estate} />
            <h2>ESTATE PLANNING</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </div>
      </div>

      <div className='casestudies_container'>
      <img src={meeting2} className='bgimg' />
      <div className='casestudy_maincontainer'>

          <div className='casestudies_title'>
          <h2>CASE STUDIES</h2>
          <img src={downarrow} />
          </div>

          <div className='casestudy_section'>
            <div className='casestudybox1'>
              <img src={meeting1} />
            </div>
            <div className='casestudybox2'>
              <h2>QUISQUE DYNAMIC</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              <button>READ MORE</button>
            </div>
          
            <div className='casestudybox2'>
              <h2>ALIQUAM CORP</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              <button>READ MORE</button>
            </div>
            <div className='casestudybox1'>
              <img src={meeting2} />
            </div>
          </div>
        </div>
      </div>

      <div className='client_container'>
      <div className='client_title'>
          <h2>Happy Client</h2>
          <img src={downarrow} />
      </div>
      <div className='client_review'>
        <div className='clientreview_box'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <h3>Andi Lane</h3>
        <p>tech developer</p>
        </div>
          <hr />
        <div className='clientreview_box'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <h3>Olive Mathews</h3>
        <p>tech developer</p>
        </div>
      </div>
      </div>

      <div className='advisors_container'>
        <div className='advisors_box'> 
        <img src={person1} />
        <p>Co-Founder</p>
        <br />
        <h2>Alec Whitten</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>

        <div className='advisors_box'> 
        <img src={person2} />
        <p>CFO</p>
        <br />
        <h2>Kelis Ford</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>

        <div className='advisors_box'> 
        <h1>OUR <br />ADVISORS</h1>
        <button>READ MORE</button>
        </div>
      </div>
    </>
  )
}
