import moveTask from "../utils/moveTask";
import generateId from "../utils/generateId";

function useTasks(board, setBoard) {
  const addTask = (columnId, task) => {
    const newTask = {
      ...task,
      id: generateId("task"),
    };

    const updatedBoard = {
      ...board,
      columns: board.columns.map((column) => {
        if (column.id !== columnId) return column;

        return {
          ...column,
          tasks: [...column.tasks, newTask],
        };
      }),
    };

    setBoard(updatedBoard);
  };

  const editTask = (taskId, updatedTask) => {
    const updatedBoard = {
      ...board,
      columns: board.columns.map((column) => ({
        ...column,
        tasks: column.tasks.map((task) =>
          task.id === taskId
            ? { ...task, ...updatedTask }
            : task
        ),
      })),
    };

    setBoard(updatedBoard);
  };

  const deleteTask = (taskId) => {
    const updatedBoard = {
      ...board,
      columns: board.columns.map((column) => ({
        ...column,
        tasks: column.tasks.filter(
          (task) => task.id !== taskId
        ),
      })),
    };

    setBoard(updatedBoard);
  };

  const moveTaskToColumn = (
    taskId,
    sourceColumnId,
    destinationColumnId
  ) => {
    const updatedBoard = moveTask(
      board,
      taskId,
      sourceColumnId,
      destinationColumnId
    );

    setBoard(updatedBoard);
  };

  return {
    addTask,
    editTask,
    deleteTask,
    moveTaskToColumn,
  };
}

export default useTasks;