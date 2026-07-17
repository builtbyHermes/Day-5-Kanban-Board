import { useState } from "react";

import Modal from "../../../../components/Modal";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

import styles from "./AddTaskModal.module.css";

function AddTaskModal({
  isOpen,
  onClose,
  onAddTask,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTask({
      id: Date.now(),
      title,
      description,
      status: "todo",
    });

    setTitle("");
    setDescription("");

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Task"
    >
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <Input
          label="Task Title"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className={styles.group}>
          <label>Description</label>

          <textarea
            className={styles.textarea}
            placeholder="Task description..."
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />
        </div>

        <div className={styles.actions}>
          <Button
            variant="secondary"
            type="button"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button type="submit">
            Add Task
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default AddTaskModal;