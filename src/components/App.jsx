import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div>
      <h3>Server Response:</h3>
      <h3>Response Goes Here!</h3>
      <form>
        <label>
          Name:
          <input name="test1" message="test2"/>
        </label>
        <label>
          Message:
          <input/>
        </label>
        <button>Send Message</button>
      </form>
      </div>
    );
  }
}

export default App;

// When the user visits the page, a small form should be displayed on the screen allowing 
// a user to input their name and a message.

// - When the user clicks the submit button, the application should send an AJAX request 
// to the server and display the response on the screen.

// Implement a button that sends an AJAX request using one of JQuery's AJAX methods to the endpoint listed in the Endpoint section. Note: Please be sure to understand how the information being sent to the server is formatted, as incorrectly formatted responses will be rejected by the server.

// Display the response from the server on the page