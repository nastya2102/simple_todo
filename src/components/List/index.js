import React, { useState, useEffect } from 'react';
import Point from '../Point';
import Filter from '../Filter';
import './style.css';

function List(props) {
  const [filterData, setFilterData] = useState({});

  useEffect(() => {
    setFilterData({data: props.data, filter: ''})
  },[props.data]);

  const setFilter = (filter) => {
    if (!filter) return setFilterData({data: props.data, filter: ''});

    if (filter === 'done'){
      setFilterData({data: props.data.filter(i => i.status), filter: filter})
    } else {
      setFilterData({data: props.data.filter(i => !i.status), filter: filter})
    }
  };

  return (<div>
    <div>
      <Filter handleChange={setFilter}/>
    </div>
    <div className="list-container">
      {filterData.data && filterData.data.map((point) => (
        <Point id={point.id}
               name={point.name}
               status={point.status}
               updatePoint = {props.updatePoint}
        />
      ))}
    </div>

  </div>)
}

export default List;