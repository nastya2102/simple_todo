import React from 'react';
import './style.css';

function AllDone({visible}) {
  return(
    <div className={['blair', visible? "db" : "dn"].join(" ")}>
    </div>
  )
}

export default AllDone;