import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        message: '',
        response: ''
      };
      this.handleName = this.handleName.bind(this);
      this.handleName = this.handleMessage.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(e) {
    this.setState({name: e.target.value});
  }

  handleMessage(e) {
    this.setState({message: e.target.value});
  }

  handleSubmit(e) {
    alert('this works!')
    event.preventDefault();
  }


  render() {
    return (
      <div>
      <h3>Server Response:</h3>
      <div>{this.state.response}</div>
      <form>
        <label>
          Name:
          <input type='text' value={this.state.name} onChange={this.handleName}/>
        </label>
        <label>
          Message:
          <input type='text' value={this.state.message} onChange={this.handleMessage}/>
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