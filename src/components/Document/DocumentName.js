import React from 'react'

const DocumentName = ({ name, handleChangeName }) => {
  return (
    <div className='document__name'>
      <label htmlFor='name'>Document Name</label>
      <input
        type='text'
        value={name}
        onChange={handleChangeName}
        name='name'
        placeholder='untitled.md'
      />
    </div>
  )
}

export default DocumentName
