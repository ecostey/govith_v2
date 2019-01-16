import React, { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import GamePage from './GamePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'LandingPage',
      level: '',
      score: '',
    }
    this.enterGame = this.enterGame.bind(this);
  }

  enterGame() {
    this.setState({
      currentView: 'GamePage'
    });
  }

  switchView() {
    const { currentView } = this.state;
    switch (currentView) {
      case 'LandingPage':
        return <LandingPage 
          onClickListener={this.enterGame}
        />
      case 'GamePage':
        return <GamePage 
          level={this.level}
          score={this.score}
        />
        default:
    }
  }

  render() {
    return (
        <div className="App">
          {this.switchView()}
        </div>
    );
  }
}

export default App;
