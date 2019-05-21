import React from 'react';

import DocumentTitle from './DocumentTitle';
import DocumentMarkdown from './DocumentMarkdown';
import DocumentPreview from './DocumentPreview';

const Document = () => {
  return (
    <main className='document'>
      <DocumentTitle />
      <div className='document__workspace'>
        <DocumentMarkdown />
        <DocumentPreview />
      </div>
    </main>
  )
}

export default Document;