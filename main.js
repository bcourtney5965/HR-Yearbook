import React from 'react';
import ReactDOM from 'react-dom';
import ContainingDiv from './App';

var hrStudents = [
  {
    "name": "Claire Hsu",
    "cohort": "41"
  },
  {
    "name": "David Gilroy",
    "cohort": "41"
  }
];
ReactDOM.render(<ContainingDiv students={hrStudents}/>, document.getElementById('app'))