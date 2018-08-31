import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      thing: ''
    }
  }

  componentDidMount() {
    console.log('request made')
    $.ajax({
      url: '/getBTC',
      type: 'GET',
      success: (data) => console.log('MY DATA HAS RETURNED \n',data),
      error: (err) => console.log('ERRORRORRORR', err)
    })
    this.setState({thing: 'print this'})
  }

  render() {
    return(
      <div>
        <div>Something is here to render</div>
        <div>{this.state.thing}</div>
      </div>
    )
  }
}

export default App;

