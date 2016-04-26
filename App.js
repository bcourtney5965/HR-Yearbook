import React from 'react';
// import ReactDOM from 'react-dom';
import $ from 'jquery';

// class Buttons extends React.Component {
//   render() {
//     return (
//       <div>
//         <button type="button" onClick={this.update(41)}>Cohort 41</button>
//         <button type="button" onClick={this.update(40)}>Cohort 40</button>
//       </div>
//     );
//   }
// }

// class IndividualStudents extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <div>
//         <img src="{this.props.student.image}" />
//         <p>{this.props.student.name}</p>
//       </div>
//     )
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cohort: 41,
      students: []
    }
    this.setCohort = this.setCohort.bind(this);
  }
  setCohort(cohort) { 
    console.log("setCohort fired ", cohort );
    this.setState({ cohort });
  }
  render() {
    return (
      <div>
          <button onClick={this.setCohort.bind(null, 37)}>37</button>
          <button onClick={this.setCohort.bind(null, 38)}>38</button> 
          <button onClick={this.setCohort.bind(null, 39)}>39</button>
          <button onClick={this.setCohort.bind(null, 40)}>40</button>
          <button onClick={this.setCohort.bind(null, 41)}>41</button>
      </div>
    )
  }
}

export default App;