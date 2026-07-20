import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";

import styles from "./DeleteTaskDialog.module.css";

function DeleteTaskDialog({
  isOpen,
  onClose,
  onDelete,
  taskTitle = "",
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete Task"
    >
      <div className={styles.content}>
        <p className={styles.message}>
          Are you sure you want to delete
          <strong> "{taskTitle}"</strong>?
        </p>

        <p className={styles.warning}>
          This action cannot be undone.
        </p>

        <div className={styles.actions}>
          <Button
            variant="secondary"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={onDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteTaskDialog;