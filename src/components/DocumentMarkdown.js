import React, {useState} from 'react';

const DocumentMarkdown = () => {
  const [markdown, setMarkdown] = useState('# This is title');
  const handleChange = (e) => {
    setMarkdown(e.target.value)
  }
  return (
    <div className='markdown'>
      <div className='markdown__header'>
        <p>MarkDown</p>
      </div>
      <textarea
        value={markdown} 
        onChange={handleChange} 
        placeholder='Enter your markdown...'
        className='markdown__textarea'
      />
    </div>
  )
}

export default DocumentMarkdown;