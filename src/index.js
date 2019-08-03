import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <div>Hello</div>,
  document.getElementById('main')
)

const worker = new Worker('worker.js')
worker.onmessage = ({ data: message }) => alert(message);
