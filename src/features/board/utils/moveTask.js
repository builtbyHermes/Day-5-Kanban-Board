function moveTask(
  board,
  taskId,
  sourceColumnId,
  destinationColumnId
) {

  // Find the task we want to move
  let movedTask;


  const updatedColumns = board.columns.map((column) => {

    // Remove task from source column
    if (column.id === sourceColumnId) {

      const filteredTasks = column.tasks.filter(
        (task) => {
          if (task.id === taskId) {
            movedTask = task;
            return false;
          }

          return true;
        }
      );


      return {
        ...column,
        tasks: filteredTasks,
      };
    }


    return column;

  });



  // Add task to destination column
  const finalColumns = updatedColumns.map((column) => {

    if (column.id === destinationColumnId) {

      return {
        ...column,
        tasks: [
          ...column.tasks,
          movedTask,
        ],
      };

    }


    return column;

  });



  return {
    ...board,
    columns: finalColumns,
  };

}


export default moveTask;