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
        className='markdown__textarea'
        id='editor'
      />
    </div>
  )
}

export default DocumentMarkdown;