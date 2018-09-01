import React from 'react';
import ReactPaginate from 'react-paginate';
import $ from 'jquery';
import HistoryList from './HistoryList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.sendRequestToJSONServer = this.sendRequestToJSONServer.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);

    this.state = {
      searchText: '',
      searchResults: [],
      pageCount: 1,
      offset: 0
    }

  }

  handleChange(e) {
    this.setState({
      searchText: e.target.value
    }, () => console.log('STATE', this.state.searchText))

  }

  handleClick() {
    console.log('clicked')
    this.setState({
      offset: 0
    }, () => this.sendRequestToJSONServer(this.state.searchText))
    
  }

  sendRequestToJSONServer(textToSearch) {
    console.log('sendRequest', textToSearch)
    $.ajax({
      url: `http://localhost:3000/events?q=${textToSearch}&_page=${this.state.offset}&_limit=10`,
      data: {limit: 100, offset: this.state.offset},
      type: 'GET',
      success: (data) => {
        console.log('SUCCESS \n', data);
        this.setState({
          searchResults: data,
        }, () => console.log('STATE \n', this.state.searchResults))
      },
      error: (error) => console.log('ERROR \n', error)
    })

  }

  handlePageClick (data) {
    let offset = data.selected;
    //selected
    // let offset = Math.ceil(selected * 10);
    // console.log('SELECTED', selected, 'OFFSET', offset)

    this.setState({offset: offset}, () => {
      this.sendRequestToJSONServer(this.state.searchText);
    });
  };

  render() {
    return(
      <div>
        <div>
          <span>Enter text here to search for historical events containing your keyword </span>
          <input type="text" onChange={this.handleChange}/>
          <button onClick={this.handleClick}>SEARCH</button>
        </div>
        <div>
          
          <HistoryList data={this.state.searchResults} />
          <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={10}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
          

        </div>
      </div>
    )
  }
}

export default App;


// Build a React UI that allows the user to search for historical events based on a keyword. 
// Use the full-text search features of json-server to return a result to the UI for browsing. 
// Paginate the list of events using react-paginate, loading no more than ten at a time. 
// Ensure you are implementing server-side pagination NOT client-side pagination.
