import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/xml-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldgutter.css';
import './App.css';
import './CodeMirrorExp.css';
import { UnControlled } from 'react-codemirror2';
import { editorValue } from './editorValue';

function App() {
  return (
    <div className="App">
      <UnControlled
        className="exp"
        value={editorValue}
        options={{
          foldGutter: true,
          lineNumbers: true,
          mode: {
            name: 'javascript',
            json: true,
          },
          theme: 'dracula',
        }}
      />
    </div>
  );
}

export default App;
