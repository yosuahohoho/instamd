import React, {useState} from 'react';

const DocumentName = () => {
  const [name, setName] = useState('');
  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div className='document__title'>
      <label htmlFor='title'>Document Name</label>
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

export default DocumentName;