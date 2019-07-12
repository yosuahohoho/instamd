import React from 'react';

const DocumentName = ({ name, handleChangeName }) => {

  return (
    <div className='document__title'>
      <label htmlFor='title'>Document Name</label>
      <input 
        type='text' 
        value={name} 
        onChange={handleChangeName} 
        name='title'
        placeholder='untitled.md'
      />
    </div>
  )
}

export default DocumentName;