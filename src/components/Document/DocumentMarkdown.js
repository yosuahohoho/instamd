import React from 'react';

import Toolbar from './Toolbar';

const DocumentMarkdown = ({markdown, handleChangeMarkdown, handleResetMarkdown}) => {

  return (
    <div className='markdown'>
      <Toolbar>
        <div className='document__toolbar__title'>
        <span>Markdown</span>
        </div>
        <div className='document__toolbar__buttons'>
          <button onClick={handleResetMarkdown}>Reset</button>
        </div>
      </Toolbar>
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