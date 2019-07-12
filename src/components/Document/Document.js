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

// Custom hook for sessionStorage functionality
const useSessionStorage = storageKey => {
  const markdownTemplate = `# InstaMD - Simple Markdown Previewer
  
  ## What is Markdown?

  Markdown is a lightweight markup language with plain text formatting syntax.
  Learn more about Markdown:

  * [Wikipedia](https://en.wikipedia.org/wiki/Markdown)
  * [Github Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
  `
  
  // Use sessionStorage data or initial template when rendering component.
  const [data, setData] = useState(sessionStorage.getItem(storageKey) || markdownTemplate)
  
  // When data changes set sessionStorage to current data.
  useEffect(() => {
    sessionStorage.setItem(storageKey, data)
  })

  return [data, setData]

}

const Document = () => {
  // Use the session storage custom hook.
  const [markdown, setMarkdown] = useSessionStorage('data')

  const handleChangeMarkdown = (e) => {
    setMarkdown(e.target.value)
  }
  
  const handleResetMarkdown = () => {
    setMarkdown('')
  } 

  return (
    <main className='document'>
      <DocumentName />
      <div className='document__workspace'>
        <DocumentMarkdown 
          markdown={markdown} 
          handleChangeMarkdown={handleChangeMarkdown}
          handleResetMarkdown={handleResetMarkdown}
        />
        <DocumentPreview preview={ReactHtmlParser(marked(markdown))}/>
      </div>
    </main>
  )
}

export default Document;