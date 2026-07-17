function normalizeState(board) {

  const tasks = {};
  const columns = {};


  board.columns.forEach((column) => {

    columns[column.id] = {
      id: column.id,
      title: column.title,
      taskIds: []
    };


    column.tasks.forEach((task) => {

      tasks[task.id] = task;

      columns[column.id]
        .taskIds
        .push(task.id);

    });

  });


  return {
    columns,
    tasks
  };

}


export default normalizeState;