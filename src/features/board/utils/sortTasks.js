function sortTasks(tasks, sortBy) {

  const sortedTasks = [...tasks];


  switch (sortBy) {

    case "priority":
      return sortedTasks.sort((a, b) => {

        const priorityOrder = {
          high: 1,
          medium: 2,
          low: 3,
        };

        return (
          priorityOrder[a.priority] -
          priorityOrder[b.priority]
        );

      });


    case "title":
      return sortedTasks.sort((a, b) =>
        a.title.localeCompare(b.title)
      );


    case "newest":
      return sortedTasks.sort((a, b) =>
        b.createdAt - a.createdAt
      );


    case "oldest":
      return sortedTasks.sort((a, b) =>
        a.createdAt - b.createdAt
      );


    default:
      return tasks;
  }

}


export default sortTasks;