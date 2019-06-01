import React, {useState} from 'react';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

import DocumentTitle from './DocumentTitle';
import DocumentMarkdown from './DocumentMarkdown';
import DocumentPreview from './DocumentPreview';

const Document = () => {
  const [markdown, setMarkdown] = useState('')
  const handleChangeMarkdown = (e) => {
    setMarkdown(e.target.value)
  } 

  return (
    <main className='document'>
      <DocumentTitle />
      <div className='document__workspace'>
        <DocumentMarkdown markdown={markdown} handleChangeMarkdown={handleChangeMarkdown}/>
        <DocumentPreview preview={ReactHtmlParser(marked(markdown))}/>
      </div>
    </main>
  )
}

export default Document;