import React from 'react';

const Pins = (props) => {
  return(
    <div>
      <div className="scoring-container">
        <div className="stroke-container">
          <span className="stroke" onClick={props.handleClick}>1</span><span className="stroke" value={2} onClick={props.handleClick}>2</span><span className="stroke" value={3} onClick={props.handleClick}>3</span>
        </div>
        <div className="stroke-container">
          <span className="stroke" value={4} onClick={props.handleClick}>4</span><span className="stroke" value={5} onClick={props.handleClick}>5</span><span className="stroke" value={6} onClick={props.handleClick}>6</span>
        </div>
        <div className="stroke-container">
          <span className="stroke" value={7} onClick={props.handleClick}>7</span><span className="stroke" value={8} onClick={props.handleClick}>8</span><span className="stroke" value={9} onClick={props.handleClick}>9</span>
        </div>
        <div className="stroke-container">
          <span className="stroke" value={10} onClick={props.handleClick}>10</span><span className="stroke" value={0} onClick={props.handleClick}>0</span>
        </div>
      </div>
    </div>
  )
}

export default Pins