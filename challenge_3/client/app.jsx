import React from 'react';
import Pins from './Pins.jsx'
import Scorecard from './Scorecard.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
    this.countShot = this.countShot.bind(this);
    this.isLegalShot = this.isLegalShot.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      currentFrame: [],
      frame: 1,
      firstShot: true,
      score: 0,
      count: 1,
      bonus: 0,

    }
  }

  handleClick(e) {
    console.log('CLICKED', e.target.innerHTML)
    if(this.isLegalShot(e.target.innerHTML)) {
      this.countShot(e.target.innerHTML)  
    }
    let shot = e.target.innerHTML
    window.alert(`Not a legal shot, ${shot} rolled`)

  }

  isLegalShot(num) {
    let firstShot = this.state.currentFrame[0] || 0;
    if (firstShot + num <= 10) {
      return true;
    }
    return false
  }


  countShot(num) {
    console.log('counting Shot')
    // this.setState({
      
    // })
  }
  handleButtonClick() {
    let currentFrame = this.state.frame + 1;
    this.setState({
      frame: currentFrame
    }, () => console.log('STATE \n', this.state))
  }

  render () {
    return(
      <div>
        <span>DISPLAY SOMETHING</span>

        <Pins handleClick={this.handleClick} />
        <Scorecard 
          frame={this.state.frame}
        />
        <button onClick={this.handleButtonClick}> click to increase frame</button>

        

      </div>
    )
  }
}

export default App;

