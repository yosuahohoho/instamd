import React from 'react';

import Toolbar from './Toolbar';

const DocumentPreview = ({preview}) => {
   
  return (
    <div className='preview'>
      <Toolbar>
        <p className="document__toolbar__title">
          Preview
        </p>
      </Toolbar>
      <div className='preview__textarea' id='preview'>
        {preview}
      </div>
    </div>
  )
}

export default DocumentPreview;