import React from 'react';
import Board from './Board';
import { lvl1, lvl2 } from './boardData';

export class GamePage extends React.Component {
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
                    {this.switchLvl()}
            </div>
        );
    }
}

export default GamePage;