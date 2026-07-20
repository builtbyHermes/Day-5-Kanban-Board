import { useEffect, useState } from "react";

import Modal from "../../../../components/Modal";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

import styles from "./EditTaskModal.module.css";

function EditTaskModal({
  isOpen,
  onClose,
  task,
  onSave,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onSave({
      ...task,
      title,
      description,
    });

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Task"
    >
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <Input
          label="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className={styles.group}>
          <label>Description</label>

          <textarea
            className={styles.textarea}
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
            Save Changes
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default EditTaskModal;