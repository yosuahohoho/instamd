import React from 'react';

import DocumentTitle from './DocumentTitle';
import DocumentMarkdown from './DocumentMarkdown';

const Document = () => {
  return (
    <main className='document'>
      <DocumentTitle />
      <div className='document__workspace'>
        <DocumentMarkdown />
      </div>
    </main>
  )
}

export default Document;