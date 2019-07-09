import React from 'react';

import Toolbar from './Toolbar';

const DocumentPreview = ({preview}) => {
   
  return (
    <div className='preview'>
      <Toolbar>
        <div className="document__toolbar__title">
          Preview
        </div>
      </Toolbar>
      <div className='preview__textarea' id='preview'>
        {preview}
      </div>
    </div>
  )
}

export default DocumentPreview;