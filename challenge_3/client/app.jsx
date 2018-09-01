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
      shots: [],
      score: [],
      frame: 1,
      firstShot: true,
      count: 1,
      bonus: 0,
      gameNotOver: true

    }
  }

  handleClick(e) {
    let bowl = e.target.innerHTML
    if(this.isLegalShot(bowl)) {
      this.countShot(bowl)  
    } else { 
      window.alert(`Not a legal shot, ${bowl} rolled`)
    }
  }

  isLegalShot(num) {
    if(this.state.firstShot) {
      return true;
    } else {
      let firstShot = this.state.shots[this.state.shots.length - 1]
      console.log('firstShot', firstShot)
      if(firstShot + num <= 10) {
        return true;
      } else {
        return false;
      }
    }
  }


  countShot(num) {
    //need to toggle firstShot state
    // let prevScore = this.state.score;
    // let prevShots = this.state.shots;
    // let newShots = null;
    // let arr = [];
    // if(typeof prevShots === 'object') {
    //   newShots = prevShots.push(num);
    // } else {
    //   newShots = arr.push(num);
    // }
    console.log(typeof this.state.shots)
    this.setState({
      shots: [...this.state.shots, num]
    }, () => console.log('SHOTS',this.state.shots, typeof this.state.shots))
  }

  // this.setState({ myArray: [...this.state.myArray, 'new value'] }) //simple value


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
          shots={this.state.shots}
          score={this.state.score}
        />
        <button onClick={this.handleButtonClick}> click to increase frame</button>

        

      </div>
    )
  }
}

export default App;

