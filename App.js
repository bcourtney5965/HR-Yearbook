import React from 'react';
// import ReactDOM from 'react-dom';

class IndividualStudents extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <img src="" />
        <p>{this.props.student.name}</p>
      </div>
    )
  }
}

var ContainingDiv = (props) => {
  return (
    <div>
      {props.students.map(function(student, key) {
        return <IndividualStudents student={student} key={key} />
      })}
    </div>
  )
}





export default ContainingDiv