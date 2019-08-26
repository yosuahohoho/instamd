import React from 'react'

const Download = ({ url, fileName }) => {
  return (
    <a
      href={url}
      className='download__link'
      alt='download'
      download={fileName || 'untitled.md'}>
      Download
    </a>
  )
}

export default Download
