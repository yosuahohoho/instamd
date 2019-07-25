import React, {useState, useEffect} from 'react';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

import DocumentName from './DocumentName';
import DocumentMarkdown from './DocumentMarkdown';
import DocumentPreview from './DocumentPreview';

marked.setOptions({
  gfm: true,
  breaks: true,
  sanitize: true
})

const STARTER_MD = 
`# InstaMD - Simple Markdown Previewer
## What is Markdown?

Markdown is a lightweight markup language with plain text formatting syntax.
  
Learn more about Markdown:
  
* [Wikipedia](https://en.wikipedia.org/wiki/Markdown)
* [Github Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
`

// Custom hook for sessionStorage functionality
const useSessionStorageState = storageKey => {
  // Use sessionStorage data or initial template when rendering component.
  const [data, setData] = useState(sessionStorage.getItem(storageKey) || STARTER_MD)
  
  // When data changes set sessionStorage to current data.
  useEffect(() => {
    sessionStorage.setItem(storageKey, data)
  })

  return [data, setData]
}

const Document = () => {
  // hooks for markdown using useSessionsStorageState custom hook
  const [markdown, setMarkdown] = useSessionStorageState('data')
  const handleChangeMarkdown = (e) => {
    setMarkdown(e.target.value)
  }
  const handleResetMarkdown = () => {
    setMarkdown('')
  }
  
  // hooks for file name
  const [name, setName] = useState('');
  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  
  // Create markdown file url using blob.
  const createURL = () => {
    const blob = new Blob([markdown], {type: 'text/markdown'})
    return window.URL.createObjectURL(blob)
  }

  return (
    <main className='document'>
      <DocumentName name={name} handleChangeName={handleChangeName}/>
      <div className='document__workspace'>
        <DocumentMarkdown 
          markdown={markdown} 
          url={createURL()}
          fileName={name}
          handleChangeMarkdown={handleChangeMarkdown}
          handleResetMarkdown={handleResetMarkdown}
        />
        <DocumentPreview preview={ReactHtmlParser(marked(markdown))}/>
      </div>
    </main>
  )
}

export default Document;