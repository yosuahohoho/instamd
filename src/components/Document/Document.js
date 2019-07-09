import React, {useState} from 'react';
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

const markdownTemplate = `# InstaMD - Simple Markdown Previewer
## What is Markdown?

Markdown is a lightweight markup language with plain text formatting syntax.
Learn more about Markdown at [Wikipedia](https://en.wikipedia.org/wiki/Markdown)

## Some Markdown syntax

Text attributes _italic_, 
**bold**

Bullet list:

  * React
  * Svelte
  * Vue

Numbered list:

  1. javaScript
  2. Go
  3. Rust

Learn more about Markdown syntax at [Github Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
`

const Document = () => {
  const [markdown, setMarkdown] = useState(markdownTemplate)
  const handleChangeMarkdown = (e) => {
    setMarkdown(e.target.value)
  }
  
  const handleReset = () => setMarkdown('') 

  return (
    <main className='document'>
      <DocumentName />
      <div className='document__workspace'>
        <DocumentMarkdown 
          markdown={markdown} 
          handleChangeMarkdown={handleChangeMarkdown}
          handleReset={handleReset}
        />
        <DocumentPreview preview={ReactHtmlParser(marked(markdown))}/>
      </div>
    </main>
  )
}

export default Document;