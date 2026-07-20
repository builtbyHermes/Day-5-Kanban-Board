import styles from "./DropZone.module.css";

function DropZone({
  onDragOver,
  onDrop,
  children,
}) {
  return (
    <div
      className={styles.dropZone}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {children}
    </div>
  );
}

export default DropZone;