import Button from "../../../components/Button";
import Input from "../../../components/Input";
import styles from "./BoardHeader.module.css";

function BoardHeader({
  title = "My Kanban Board",
  searchValue,
  onSearchChange,
  onAddTask,
}) {
  return (
    <header className={styles.header}>

      <div className={styles.left}>
        <h1 className={styles.title}>
          {title}
        </h1>
      </div>


      <div className={styles.actions}>

        <Input
          placeholder="Search tasks..."
          value={searchValue}
          onChange={onSearchChange}
        />


        <Button onClick={onAddTask}>
          + Add Task
        </Button>

      </div>

    </header>
  );
}

export default BoardHeader;