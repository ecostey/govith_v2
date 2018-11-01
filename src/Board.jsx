import React from 'react';

function Board(props) {
  const boardArray = [];
  for (let i = 0; i < props.level.length; i += 1) {
    for (let j = 0; j < props.level.length; j += 1) {
      const element = (
        <div></div>
      );
      const currentClassName = props.level[i][j];
      element.className = 'tile';
      element.classList.add(currentClassName);
      element.id = currentClassName + j + i;
      boardArray.push(element);
    }
  }
  return(boardArray);
}

export default Board;