import styles from "./ColumnHeader.module.css";

function ColumnHeader({
  title,
  count = 0,
}) {
  return (
    <div className={styles.header}>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>

        <span className={styles.count}>
          {count}
        </span>
      </div>

      <button
        className={styles.menu}
        aria-label="Column options"
      >
        ⋮
      </button>
    </div>
  );
}

export default ColumnHeader;