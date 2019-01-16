import React from 'react';
import Board from './Board';
import { lvl1, lvl2 } from './boardData';
import ScoreBox from './ScoreBox';

class GamePage extends React.Component {
    switchLvl () {
        switch(this.props.currentLvl) {
                case 'Lvl1':
            return <Board
                level={lvl1}
            />
                case 'Lvl2':
            return <Board
                level={lvl2}
            />
            default:
        }
    }
    render() {
        return (
            <div className="App">
                <h1>Govith</h1>
                    {this.switchLvl()}
                <ScoreBox 
                    score={this.score}
                />
                <Board />
            </div>
        );
    }
}

export default GamePage;

//TODO:
//Pass levels prop correctly to Board.jsx
//Add Hero component
//Add Updates Component
//Add Inventory Component
//Add Level Text Component
//Add Game End Logic