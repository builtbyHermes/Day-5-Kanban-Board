import styles from "./TaskPriority.module.css";

function TaskPriority({
  priority = "medium",
}) {

  const priorityText = {
    high: "High",
    medium: "Medium",
    low: "Low",
  };


  return (
    <span
      className={`${styles.priority} ${styles[priority]}`}
    >
      <span className={styles.dot}></span>

      {priorityText[priority]}
    </span>
  );
}

export default TaskPriority;