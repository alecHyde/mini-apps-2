import React from 'react';
import $ from 'jquery';
import RC2 from 'react-chartjs-2';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.processData = this.processData.bind(this);
    this.state = {
      dates: [],
      prices: []
    }
  }

  componentDidMount() {
    console.log('request made')
    $.ajax({
      url: '/getBTC',
      type: 'GET',
      success: (data) => this.processData(data),
      error: (err) => console.log('ERRORRORRORR', err)
    })
    this.setState({thing: 'print this'})
  }


  processData(data) {
    let dataObj = JSON.parse(data)
    let datesState = [];
    let priceState = [];
    for(let key in dataObj.bpi) {
      datesState.push(key);
      priceState.push(dataObj.bpi[key]);
    }
    this.setState({
      dates: datesState,
      prices: priceState
    }, () => console.log('dates\n', this.state.dates, '\n prices\n', this.state.prices))
    console.log('MY DATA HAS RETURNED \n',dataObj.bpi, typeof dataObj)
  }

  render() {
    let chartData = {
      labels: this.state.dates,
      datasets: [
        {
          label: 'End of day closing prices',
          data: this.state.prices
        }
      ]
    };

    return (
      <div>
        <div>BTC price over the past month</div>
        <RC2 data={chartData} type='line' />;
      </div>
    )
  }
}

export default App;

