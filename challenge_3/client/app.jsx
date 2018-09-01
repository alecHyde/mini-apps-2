import React from 'react';
import Pins from './Pins.jsx'
import Scorecard from './Scorecard.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
    this.countShot = this.countShot.bind(this);
    this.isLegalShot = this.isLegalShot.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.countScore = this.countScore.bind(this)
    this.state = {
      shots: [],
      score: [],
      shotCount: 1,
      gameOver: false
    }
  }

  handleClick(e) {
    let bowl = Number(e.target.innerHTML)
    let lastShot = this.state.shots[this.state.shots.length - 1]
    if(this.isLegalShot(bowl)) {
      this.countShot(bowl)  
    } else { 
      window.alert(`Woopsies! That's not a legal shot. You rolled a ${lastShot} on your first shot.`)
    }
  }

  isLegalShot(num) {
    if(this.state.shotCount % 2 === 1 || this.state.shotCount === 1) {
      console.log('GETS a pass',  this.state.shotCount % 2)
      return true;
    } else {
      console.log('NUMEBR TO JUDGE ON', this.state.shotCount % 2)
      let firstShot = this.state.shots[this.state.shots.length - 1]
      console.log('firstShot', firstShot)
      console.log('sum', firstShot + num)
      if(firstShot + num <= 10) {
        return true;
      } else {
        return false;
      }
    }
  }


  countShot(num) {
    // strike
    let lastShot = this.state.shots[this.state.shots.length - 1]
    if(num === 10 && this.state.shotCount % 2 === 0) {
      console.log('STRIKE!')
      this.setState({
        shots: [...this.state.shots, num],
        shotCount: this.state.shotCount + 1
      }, () => this.handleStrike())

    }

    // spare

    // not a strike or a spare
    this.setState({
      shots: [...this.state.shots, num],
      shotCount: this.state.shotCount + 1
    }, () => this.countScore())
  }

  countScore() {
    console.log('count score engaged')
    if(this.state.shotCount % 2 === 1 && this.state.shotCount !== 1) {
      let score = this.state.shots.reduce((acc, val) => acc + val);
      this.setState({
        score: [...this.state.score, score]
      }, () => console.log("score", this.state.score))
    } 
  }

  resetGame() {
    this.setState({
      shots: [],
      score: [],
      shotCount: 1
    })
  }

  render () {
    return(
      <div>
        <span>Lets go BOWLING!</span>

        <Pins handleClick={this.handleClick} />
        <Scorecard 
          shots={this.state.shots}
          score={this.state.score}
        />
        <button onClick={this.resetGame}> click to reset game</button>

        

      </div>
    )
  }
}

export default App;

