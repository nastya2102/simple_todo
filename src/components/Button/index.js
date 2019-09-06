import React from 'react';
import './style.css';

function Button({children, onClick, disabled = false, className = ''}) {
  return (
    <div
      className={['button', className].join(' ')}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default React.memo(Button);
