import React from 'react';

function App() {
  return (
    <div className="App">
      <section className="document-container">
        <div className="document-markdown">
          <textarea placeholder="This is your markdown"/>
        </div>
        <div className="document-preview">
          <textarea placeholder="This is your markdown preview"/>
        </div>        
      </section>
    </div>
  );
}

export default App;
