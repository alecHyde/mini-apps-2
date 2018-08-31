import React from 'react';
import ReactPaginate from 'react-paginate';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.sendRequestToJSONServer = this.sendRequestToJSONServer.bind(this);
    this.state = {
      searchText: '',
      searchResults: []
    }

  }

  handleChange(e) {
    this.setState({
      searchText: e.target.value
    }, () => console.log('STATE', this.state.searchText))

  }

  handleClick() {
    console.log('clicked')
    this.sendRequestToJSONServer(this.state.searchText)
  }

  sendRequestToJSONServer(textToSearch) {
    console.log('sendRequest', textToSearch)
    $.ajax({
      url: `http://localhost:3000/events?q=${textToSearch}`,
      type: 'GET',
      success: (data) => console.log('SUCCESS \n', data),
      error: (error) => console.log('ERROR \n', error)

    })

  }

  render() {
    return(
      <div>
        <span>Enter text here to search for historical events containing your keyword </span>
        <input type="text" onChange={this.handleChange}/>
        <button onClick={this.handleClick}>SEARCH</button>
        <div>{this.state.searchResults}</div>
      </div>
    )
  }
}

export default App;


// Build a React UI that allows the user to search for historical events based on a keyword. 
// Use the full-text search features of json-server to return a result to the UI for browsing. 
// Paginate the list of events using react-paginate, loading no more than ten at a time. 
// Ensure you are implementing server-side pagination NOT client-side pagination.
