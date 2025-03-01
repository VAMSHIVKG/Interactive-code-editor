// App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [fontSize, setFontSize] = useState(14); // Default font size

  const srcDoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  return (
    <div className="app">
      <div className="controls">
        <div className="font-control">
          <label>Font Size: </label>
          <select 
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
          >
            <option value={12}>12px</option>
            <option value={14}>14px</option>
            <option value={16}>16px</option>
            <option value={18}>18px</option>
          </select>
        </div>
      </div>

      <div className="editor-container">
        {/* HTML Editor */}
        <div className="editor">
          <div className="editor-header html-header">
            <h3>HTML</h3>
          </div>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            placeholder="Enter HTML here"
            style={{ fontSize: `${fontSize}px` }}
          />
        </div>

        {/* CSS Editor */}
        <div className="editor">
          <div className="editor-header css-header">
            <h3>CSS</h3>
          </div>
          <textarea
            value={css}
            onChange={(e) => setCss(e.target.value)}
            placeholder="Enter CSS here"
            style={{ fontSize: `${fontSize}px` }}
          />
        </div>

        {/* JavaScript Editor */}
        <div className="editor">
          <div className="editor-header js-header">
            <h3>JavaScript</h3>
          </div>
          <textarea
            value={js}
            onChange={(e) => setJs(e.target.value)}
            placeholder="Enter JavaScript here"
            style={{ fontSize: `${fontSize}px` }}
          />
        </div>
      </div>

      {/* Preview Section */}
      <div className="preview">
        <div className="preview-header">
          <h3>Live Preview</h3>
        </div>
        <iframe
          title="preview"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default App;