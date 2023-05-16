import React from 'react';
import Divider from '@mui/material/Divider';

import './PageNotFound.css'

function PageNotFound() {

  return (
    <div className="nf-container">
        <h1 className='msg'>404</h1>
        <Divider orientation="vertical" style={{ backgroundColor: '#8f8f8f', height: '38px', width:'1px' }} />
        <h1 className='goback'>Page not found :(</h1>
    </div>
  );
}

export default PageNotFound;