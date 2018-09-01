import React from 'react';

const HistoryList = (props) => {
  return(
    <div>
      {props.data.map(item => 
        <div>
          <h4>{item.date}</h4>
          <div>{item.description}</div>
        </div> 
      )}
    </div>
  )
}

export default HistoryList