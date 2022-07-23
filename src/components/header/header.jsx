// import React from 'react'
import './header.css'
import React, { Component } from 'react'

class Header extends Component {
render() { 
    return (
      <header>
     <div
        className='p-5 text-center bg-image'
        style={{height: 500 }}
      >
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-black'>
              <h1 className='mb-3'>Heading</h1>
              <h4 className='mb-3'>Subheading</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
</header>
   
);
  }
}
 
export default Header;

