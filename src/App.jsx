import React, { Component } from 'react';
import makeBoard from './Board';
import './App.css';
import LandingPage from './LandingPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'LandingPage',
    }
  }

  switchView() {
    const { currentView } = this.state;
    switch (currentView) {
      case 'LandingPage':
        return <LandingPage />
      case 'Lvl1':
        return <Board />
      case 'Lvl2':
        return <Board />
    }
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
