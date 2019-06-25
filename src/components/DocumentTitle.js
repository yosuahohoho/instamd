import React, {useState} from 'react';

const DocumentTitle = () => {
  const [title, setTitle] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div className='document__title'>
      <input 
        type='text' 
        value={title} 
        onChange={handleChange} 
        name='title'
        placeholder='untitled.md'
      />
    </div>
  )
}

export default DocumentTitle;