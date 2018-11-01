import React, { Component } from 'react';
import Board from './Board';
import './App.css';
import LandingPage from './LandingPage';
import { lvl1, lvl2 } from './boardData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'LandingPage',
      level: '',
    }
  }

  switchView() {
    const { currentView } = this.state;
    switch (currentView) {
      case 'LandingPage':
        return <LandingPage />
      case 'Lvl1':
        return <Board 
        level={lvl1}
        />
      case 'Lvl2':
        return <Board 
        level={lvl2}
        />
    }
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body>
          {this.switchView()}
        </body>
      </div>
    );
  }
}

export default App;
