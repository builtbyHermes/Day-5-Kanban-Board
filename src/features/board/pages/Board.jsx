import { useState } from "react";

import BoardHeader from "../components/BoardHeader";
import Column from "../components/Column";
import AddTaskModal from "../components/AddTaskModal";

import initialBoard from "../data/initialBoard";

import styles from "./Board.module.css";
import useBoard from "../hooks/useBoard";


function Board() {

  const {board} = useBoard();

  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);



  const handleAddTask = (newTask) => {

    const updatedBoard = {
      ...board,

      columns: board.columns.map((column) => {

        if (column.id === "todo") {

          return {
            ...column,
            tasks: [
              ...column.tasks,
              newTask
            ]
          };

        }

        return column;

      }),
    };


    setBoard(updatedBoard);
  };



  return (

    <div className={styles.container}>


      <BoardHeader
        title="My Kanban Board"
        subtitle="Manage your tasks"
        search={search}
        onSearch={(e) => setSearch(e.target.value)}
        onAddTask={() => setShowAddModal(true)}
      />



      <div className={styles.board}>

        {board.columns.map((column) => (

          <Column
            key={column.id}
            title={column.title}
            tasks={column.tasks}
          />

        ))}

      </div>



      <AddTaskModal

        isOpen={showAddModal}

        onClose={() => setShowAddModal(false)}

        onAddTask={handleAddTask}

      />


    </div>

  );
}


export default Board;