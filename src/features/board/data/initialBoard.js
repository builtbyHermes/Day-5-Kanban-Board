const initialBoard = {
  columns: [
    {
      id: "todo",
      title: "Todo",
      tasks: [
        {
          id: 1,
          title: "Create login page",
          description: "Build authentication UI",
          priority: "high",

          labels: [
            "Frontend",
            "UI"
          ],

          assignees: [
            {
              id: 1,
              name: "John Doe",
              avatar: "/avatars/john.png"
            }
          ]
        }
      ]
    },

    {
      id: "progress",
      title: "In Progress",
      tasks: []
    },

    {
      id: "done",
      title: "Done",
      tasks: []
    }
  ]
};


export default initialBoard;