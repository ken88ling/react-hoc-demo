import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed';

class App extends Component {
  state = { contacts: [] };


  componentDidMount() {
    fetch("https://api.randomuser.me/?results=50")
      .then(response => response.json())
      .then(parsedResponse =>
        parsedResponse.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          thumbnail: user.picture.thumbnail
        }))
      )
      .then(contacts => this.setState({ contacts }));
  }

  render() {
    //debugger;

    return (
      <div className="App">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Hoc demo app</a>
            </li>
          </ul>
        </nav>
        <Feed contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
