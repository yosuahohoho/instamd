import React from 'react';

const DocumentPreview = ({preview}) => {
   
    return (
        <div className='preview'>
            <div className='preview__header'>
                <p>Preview</p>
            </div>
            <div className='preview__textarea' id='preview'>
              {preview}
            </div>
        </div>
    )
}

export default DocumentPreview;