import React from 'react';
import Button from '../Button';
import './style.css';

function Filter({handleChange}) {
  return(
    <div className="filter-container">
      <div>Filter</div>
      <div  className="filter-btn-container">
        <Button onClick={() => handleChange('done')}>Done</Button>
        <Button onClick={() =>  handleChange('no')}>No</Button>
        <Button onClick={() =>  handleChange(false)}>All</Button>
      </div>
    </div>
  )
}

export default Filter;
