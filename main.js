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


// <button type="button" onClick={console.log("button pressed")}>Click to see Cohort 37</button>
// <button type="button">Click to see Cohort 37</button>

    // ,
    // handleClick: function(cohort) {
    //   this.setState({
    //     currentCohort: cohort;
    //   })
    // },


  //     getInitialState: function() {
  //   return {liked: false};
  // },
  // handleClick: function(event) {
  //   this.setState({liked: !this.state.liked});
  // }