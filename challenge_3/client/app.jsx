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
    this.countScore = this.countScore.bind(this);
    this.handleStrike = this.handleStrike.bind(this);
    this.handleSpare = this.handleSpare.bind(this);
    this.handleNormalRollScore = this.handleNormalRollScore.bind(this);
    this.countSpareScore = this.countSpareScore.bind(this);
    this.countStrikeScore = this.countStrikeScore.bind(this);
    this.state = {
      shots: [],
      score: [],
      shotCount: 1,
      strikeScoreCount: 0,
      spareScoreCount: 0,
      strike: false,
      spare: false,
    }
  }

  handleClick(e) {
    let gameOver = false;
    if(!this.state.spare && !this.state.strike && this.state.shotCount >= 21) {
      gameOver = true;
      console.log('GAME OVER!!!!!')
    }
    if(this.state.shotCount >= 22 && this.state.spare || this.state.shotCount >= 22 && this.state.strike) {
      console.log('GAME IS OVER DUE TO STRIKE OR SPARE COUNT')
      gameOver = true;
    }
    let bowl = Number(e.target.innerHTML)
    let lastShot = this.state.shots[this.state.shots.length - 1]
    if(this.isLegalShot(bowl) && !gameOver) {
      this.countShot(bowl)  
    } else if (gameOver === true) {
      window.alert('The game is over, please click the reset game button to play again')
    } else { 
      window.alert(`Woopsies! That's not a legal shot. You rolled a ${lastShot} on your first shot.`)
    }
  }

  isLegalShot(num) {
    if(this.state.shotCount % 2 === 1 || this.state.shotCount === 1) {
      return true;
    } else {
      console.log('NUMEBR TO JUDGE ON', this.state.shotCount % 2)
      let firstShot = this.state.shots[this.state.shots.length - 1]
      if(firstShot + num <= 10) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  handleStrike () {
    console.log('called')
    let currentCount = this.state.shotCount;
    let futureCount = currentCount + 3
    this.setState({
      shots: [...this.state.shots, 0],
      shotCount: this.state.shotCount + 1,
      strikeScoreCount: futureCount,
      strike: true 
    }, () => this.handleNormalRollScore())
  }

  handleSpare() {
    let currentCount = this.state.shotCount;
    let futureCount = currentCount + 1
    this.setState({
      spareScoreCount: futureCount,
      spare: true
    }, () => this.handleNormalRollScore())

  }

  countShot(num) {
    let lastShot = this.state.shots[this.state.shots.length - 1]
    // strike
    if(num === 10 && this.state.shotCount % 2 === 1) {
      console.log('STRIKE!')
      this.setState({
        shots: [...this.state.shots, num],
        shotCount: this.state.shotCount + 1
      }, () => this.handleStrike())

    // spare
    } else if (this.state.shotCount % 2 === 0 && lastShot + num === 10){
      console.log('SPARE!')
      this.setState({
        shots: [...this.state.shots, num],
        shotCount: this.state.shotCount + 1
      }, () => this.handleSpare())

    // not a strike or a spare
    } else {
      this.setState({
        shots: [...this.state.shots, num],
        shotCount: this.state.shotCount + 1
      }, () => this.handleNormalRollScore())
    }
  }

  handleNormalRollScore () {
    if(this.state.strike && this.state.strikeScoreCount === this.state.shotCount) {
      this.countStrikeScore();
      return;
    }
    if(this.state.spare && this.state.spareScoreCount === this.state.shotCount) {
      this.countSpareScore();
      return;
    }
    if(this.state.shotCount % 2 === 1 && !this.state.strike && !this.state.spare) {
      this.countScore();
      return;
    }
    return;
  }

  countScore() {
    console.log('count score engaged')

    let score = this.state.shots.reduce((acc, val) => acc + val);
    if(this.state.score.length) {
      score = this.state.score[this.state.score.length - 1];
      let lastScore = this.state.shots[this.state.shots.length - 1];
      let secondLastScore = this.state.shots[this.state.shots.length - 2];
      score = score + lastScore + secondLastScore;
    }

    if(this.state.strike) {
      score = score + this.state.shots[this.state.shots.length - 1] + this.state.shots[this.state.shots.length - 2]
    }

    this.setState({
      score: [...this.state.score, score],
    }, () => console.log("score", this.state.score))
  }

  countStrikeScore() {
    // add strike score to score in set state, then call count score in the callback to set state
    // let score = this.state.shots.reduce((acc, val) => acc + val);

    let score = 10;
    if(this.state.score.length) {
      score = this.state.score[this.state.score.length - 1];
      let lastScore = this.state.shots[this.state.shots.length - 1];
      let secondLastScore = this.state.shots[this.state.shots.length - 2];
      score = score + lastScore + secondLastScore + 10;
    }
    this.setState({
      score: [...this.state.score, score],
      strikeScoreCount: 0,
      strike: false,
    }, () => this.handleNormalRollScore())
  }

  countSpareScore() {
    let score = this.state.shots.reduce((acc, val) => acc + val);
    let lastScore = this.state.shots[this.state.shots.length - 1];
    let newScore = score + lastScore;
    this.setState({
      score: [...this.state.score, newScore],
      spareScoreCount: 0,
      spare: false,
    })

  }

  resetGame() {
    this.setState({
      shots: [],
      score: [],
      shotCount: 1,
      strikeScoreCount: 0,
      spareScoreCount: 0,
      strike: false,
      spare: false,
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
        <button onClick={this.resetGame}>click to reset game</button>

        

      </div>
    )
  }
}

export default App;

