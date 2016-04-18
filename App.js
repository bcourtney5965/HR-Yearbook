import React from 'react';
// import ReactDOM from 'react-dom';

class Buttons extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <button type="button" onClick={this.update(41)}>Cohort 41</button>   //
        <button type="button" onClick={this.update(40)}>Cohort 40</button>
      </div>
    )
  }
}

class IndividualStudents extends React.Component {
  constructor() {
    super();
    this.state = { cohort: null }
    this.update = this.update.bind(this);
  }
  update(newVal) {
    this.setState({val: newVal})
  }
  
  render() {
    return (
      <div>
        <img src="{this.props.student.image}" />
        <p>{this.props.student.name}</p>
      </div>
    )
  }
}

var ContainingDiv = (props) => {
  return (
    <div>
      <Buttons />
      {props.students.map(function(student, key) {
        return <IndividualStudents student={student} key={key} />
      })}
    </div>
  )
}

export default ContainingDiv