import React from 'react';
import ReactDOM from 'react-dom';
import ContainingDiv from './App';

$.get( "https://hr-yearbook.herokuapp.com/api/cohort/37", function( data ) {
  var hrStudents = [];
  for(var i = 0; i < data.length; i++) {
    hrStudents.push(data[i]);
  }
  ReactDOM.render(<ContainingDiv students={hrStudents}/>, document.getElementById('app'));
});