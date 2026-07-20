import ColumnHeader from "../ColumnHeader";
import TaskCard from "../TaskCard";

import styles from "./Column.module.css";

function Column({
  title,
  tasks = [],
}) {
  return (
    <section className={styles.column}>

      <ColumnHeader
        title={title}
        count={tasks.length}
      />

      <div className={styles.tasks}>

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}

      </div>

    </section>
  );
}

export default Column;