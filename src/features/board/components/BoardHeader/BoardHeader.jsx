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

            <div className={styles.actions}>
        <div className={styles.search}>
          <Input
            placeholder="Search tasks..."
            value={searchValue}
            onChange={onSearchChange}
          />
        </div>

        <div className={styles.button}>
          <Button onClick={onAddTask}>
            + Add Task
          </Button>
        </div>
      </div>

    </header>
  );
}

export default BoardHeader;