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
    this.countScore = this.countScore.bind(this)
    this.state = {
      shots: [],
      score: [],
      frame: 1,
      firstShot: true,
      count: 1,
      bonus: 0,
      gameNotOver: true,
      initialShot: true

    }
  }

  handleClick(e) {
    let bowl = Number(e.target.innerHTML)
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
      console.log('sum', firstShot + num)
      if(Number(firstShot) + Number(num) <= 10) {
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
      shots: [...this.state.shots, num],
      firstShot: !this.state.firstShot,
      initialShot: false
    }, () => this.countScore())
  }

  countScore() {
    console.log('engaged')
    if(this.state.firstShot && !this.state.initialShot) {
      let score = this.state.shots.reduce((acc, val) => acc + val);
      this.setState({
        score: [...this.state.score, score]
      }, () => console.log("score", this.state.score))
    } 
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
          shots={this.state.shots}
          score={this.state.score}
        />
        <button onClick={this.handleButtonClick}> click to increase frame</button>

        

      </div>
    )
  }
}

export default App;

