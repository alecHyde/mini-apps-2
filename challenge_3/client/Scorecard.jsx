import React from 'react';

class Scorecard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      frame: 1,
      shots: [3,4,8,2],
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.frame !== prevProps.frame) {
      this.setState({
        frame: this.props.frame
      }, () => console.log('NEW FRAME NUMBER', this.state.frame))

    }
  }
  
  handleShotsChange(frame, position) {
    
      return this.state.Shots[(frame * 2) + position - 1];
      
  }


  render() {

    return (
      <div>
        <div> ANoTHER THING TO SEE
        </div>

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

              <td>F3S1</td>
              <td>F3S2</td>

              <td>F4S1</td>
              <td>F4S2</td>

              <td>F5S1</td>
              <td>F5S2</td>

              <td>F6S1</td>
              <td>F6S2</td>

              <td>F7S1</td>
              <td>F7S2</td>

              <td>F8S1</td>
              <td>F8S2</td>

              <td>F9S1</td>
              <td>F9S2</td>

              <td>F10S1</td>
              <td>F10S2</td>
              <td>F10S1</td>
              
            </tr>

            <tr>
              <td colSpan="2">score 1</td>
              <td colSpan="2">score 2</td>
              <td colSpan="2">score 3</td>
              <td colSpan="2">score 4</td>
              <td colSpan="2">score 5</td>
              <td colSpan="2">score 6</td>
              <td colSpan="2">score 7</td>
              <td colSpan="2">score 8</td>
              <td colSpan="2">score 9</td>
              <td colSpan="3">score 10</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

    )
  }


}

export default Scorecard;