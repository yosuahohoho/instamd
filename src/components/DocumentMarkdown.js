import React from 'react';

const DocumentMarkdown = ({markdown, handleChangeMarkdown}) => {

  return (
    <div className='markdown'>
      <div className='markdown__header'>
        <p>MarkDown</p>
      </div>
      <textarea
        value={markdown} 
        onChange={handleChangeMarkdown} 
        placeholder='Enter your markdown...'
        className='markdown__textarea'
      />
    </div>
  )
}

export default DocumentMarkdown;