import TaskPriority from "../TaskPriority";
import TaskLabels from "../TaskLabels";
import TaskAssignees from "../TaskAssignees";

import styles from "./TaskCard.module.css";


function TaskCard({
  task,
  onEdit,
  onDelete,
}) {

  return (
    <article className={styles.card}>

      <div className={styles.top}>

        <h3 className={styles.title}>
          {task.title}
        </h3>


        <button
          className={styles.menu}
          onClick={() => onEdit(task)}
        >
          ⋮
        </button>

      </div>


      {task.description && (
        <p className={styles.description}>
          {task.description}
        </p>
      )}


      {task.priority && (
        <TaskPriority
          priority={task.priority}
        />
      )}


      {task.labels && (
        <TaskLabels
          labels={task.labels}
        />
      )}


      {task.assignees && (
        <TaskAssignees
          users={task.assignees}
        />
      )}


      <div className={styles.footer}>

        <button
          className={styles.delete}
          onClick={() => onDelete(task)}
        >
          Delete
        </button>

      </div>


    </article>
  );
}


export default TaskCard;