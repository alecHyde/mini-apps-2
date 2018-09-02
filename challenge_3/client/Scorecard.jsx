import React from 'react';

class Scorecard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      shots: [],
      score: []
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.shots !== prevProps.shots || this.props.score !== prevProps.score) {
      this.setState({
        shots: this.props.shots,
        score: this.props.score
      })

    }
  }
  
  handleShotsChange(frame, position) {
    return this.state.shots[(frame * 2) + position - 1];  
  }

  handleScoreChange(frame) {
    return this.state.score[frame - 1];
  }


  render() {

    return (
      <div>
        <div>
          <table>
            <tbody>
              <tr>
                <th colSpan="2">frame 1</th>
                <th colSpan="2">frame 2</th>
                <th colSpan="2">frame 3</th>
                <th colSpan="2">frame 4</th>
                <th colSpan="2">frame 5</th>
                <th colSpan="2">frame 6</th>
                <th colSpan="2">frame 7</th>
                <th colSpan="2">frame 8</th>
                <th colSpan="2">frame 9</th>
                <th colSpan="3">frame 10</th>
              </tr>
              <tr>
                <td>{this.handleShotsChange(0,1)}</td>
                <td>{this.handleShotsChange(0,2)}</td>
                <td>{this.handleShotsChange(1,1)}</td>
                <td>{this.handleShotsChange(1,2)}</td>
                <td>{this.handleShotsChange(2,1)}</td>
                <td>{this.handleShotsChange(2,2)}</td>
                <td>{this.handleShotsChange(3,1)}</td>
                <td>{this.handleShotsChange(3,2)}</td>
                <td>{this.handleShotsChange(4,1)}</td>
                <td>{this.handleShotsChange(4,2)}</td>
                <td>{this.handleShotsChange(5,1)}</td>
                <td>{this.handleShotsChange(5,2)}</td>
                <td>{this.handleShotsChange(6,1)}</td>
                <td>{this.handleShotsChange(6,2)}</td>
                <td>{this.handleShotsChange(7,1)}</td>
                <td>{this.handleShotsChange(7,2)}</td>
                <td>{this.handleShotsChange(8,1)}</td>
                <td>{this.handleShotsChange(8,2)}</td>
                <td>{this.handleShotsChange(9,1)}</td>
                <td>{this.handleShotsChange(9,2)}</td>
                <td>{this.handleShotsChange(9,3)}</td>
              </tr>
              <tr>
                <td colSpan="2">{this.handleScoreChange(1)}</td>
                <td colSpan="2">{this.handleScoreChange(2)}</td>
                <td colSpan="2">{this.handleScoreChange(3)}</td>
                <td colSpan="2">{this.handleScoreChange(4)}</td>
                <td colSpan="2">{this.handleScoreChange(5)}</td>
                <td colSpan="2">{this.handleScoreChange(6)}</td>
                <td colSpan="2">{this.handleScoreChange(7)}</td>
                <td colSpan="2">{this.handleScoreChange(8)}</td>
                <td colSpan="2">{this.handleScoreChange(9)}</td>
                <td colSpan="3">{this.handleScoreChange(10)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    )
  }


}

export default Scorecard;