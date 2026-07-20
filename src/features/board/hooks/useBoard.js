import { useState } from "react";

import initialBoard from "../data/initialBoard";


function useBoard() {

  //here we are setting what the board container(tasks)
  const [board, setBoard] = useState(initialBoard);


 //how we can set new updated board 
  const updateBoard = (newBoard) => {
    setBoard(newBoard);
  };


 
  const getColumn = (columnId) => {

    return board.columns.find(
      (column) => column.id === columnId
    );

  };


  return {
    board,
    setBoard,
    updateBoard,
    getColumn,
  };

}


export default useBoard;