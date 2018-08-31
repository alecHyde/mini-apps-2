import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div>
        <input />
        <div>Something is on the page</div>
      </div>
    )
  }
}

export default App;


// Build a React UI that allows the user to search for historical events based on a keyword. 
// Use the full-text search features of json-server to return a result to the UI for browsing. 
// Paginate the list of events using react-paginate, loading no more than ten at a time. 
// Ensure you are implementing server-side pagination NOT client-side pagination.
