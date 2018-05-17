import React from 'react';

const Key = ( {value, isClickable, id, onClickAction} ) => (
  <div
    className="number"
    style={{ opacity: isClickable ? 1 : 0.3 }}
    onClick={ () => {
      if (isClickable) {
        onClickAction(id)
      }
    }}>
    {value} </div>
)
export default Key;
