import React, { useState } from 'react';

const DocumentPreview = () => {
    const [preview, setPreview] = useState('This is title');
    const handleChange = (e) => {
        setPreview(e.target.value)
    }
    return (
        <div className='preview'>
            <div className='preview__header'>
                <p>Preview</p>
            </div>
            <textarea
                onChange={handleChange}
                placeholder='This is your markdown preview'
                className='preview__textarea'
            >
                {preview}
            </textarea>
        </div>
    )
}

export default DocumentPreview;