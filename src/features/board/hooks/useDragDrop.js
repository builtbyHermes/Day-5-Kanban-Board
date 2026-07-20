import { useState } from "react";

function useDragDrop(moveTaskToColumn) {
  const [draggedTask, setDraggedTask] = useState(null);

  const handleDragStart = (taskId, sourceColumnId) => {
    setDraggedTask({
      taskId,
      sourceColumnId,
    });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (destinationColumnId) => {
    if (!draggedTask) return;

    const { taskId, sourceColumnId } = draggedTask;

    if (sourceColumnId === destinationColumnId) {
      setDraggedTask(null);
      return;
    }

    moveTaskToColumn(
      taskId,
      sourceColumnId,
      destinationColumnId
    );

    setDraggedTask(null);
  };

  const handleDragEnd = () => {
    setDraggedTask(null);
  };

  return {
    draggedTask,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnd,
  };
}

export default useDragDrop;