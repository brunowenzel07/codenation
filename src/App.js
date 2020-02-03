import React, { Component } from 'react';
import { render } from 'react-dom'
import './App.css';

const apiUrl = "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=dce6b21f8381ac8aca5ee0a794a43c2090525e85";
const meuToken = "dce6b21f8381ac8aca5ee0a794a43c2090525e85"

function App() {

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => console.save(data));

    console.save = function (data, filename) {

        if (!filename) filename = 'answer.json'

        if (typeof data === "object") {
            data = JSON.stringify(data, undefined, 4);
        }

        const num = data.numero_casas;

        var blob = new Blob([data], {type: 'text/json'}),
            a    = document.createElement('a');

        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':');
        a.dispatchEvent();
    };
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
