import React from 'react';
import './style.css'

function Point(props) {
  const setName  = (event) => {
    props.updatePoint({ ...props, ...{name: event.target.value}})
  };

  const setPointStatus  = () => {
    props.updatePoint({ ...props, ...{status: !props.status}})
  };

  const getClassPoint = (status) =>{
    return `point-input ${status && "done-input"}`
  }


  return (
  <div id={props.id} className="point-container">
    <input value={props.name}
           onChange={setName}
           className={getClassPoint(props.status)}
  />
    <span
      onClick={setPointStatus}
    >{props.status ? "done" : "no"}</span>
  </div>)
}

export default Point;
