import React, {useState} from 'react';

const DocumentTitle = () => {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className='document__title'>
      <input 
        type='text' 
        value={text} 
        onChange={handleChange} 
        name='title'
        placeholder='untitled.md'
      />
    </div>
  )
}

export default DocumentTitle;