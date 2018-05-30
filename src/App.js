import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';

import Chatfield from './components/Chatfield';


let messages = chatMessages;

class App extends Component {

  render() {
    console.log(chatMessages);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chat Between Vladimir and Estragon</h1>
        </header>
        <main className="App-main">
        <Chatfield info={messages}/>
        </main>
      </div>
    );
  }
}

export default App;
