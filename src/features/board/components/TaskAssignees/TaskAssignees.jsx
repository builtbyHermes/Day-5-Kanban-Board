import Avatar from "../../../../components/Avatar";

import styles from "./TaskAssignees.module.css";


function TaskAssignees({
  users = [],
  maxVisible = 3,
}) {

  const visibleUsers = users.slice(0, maxVisible);

  const remainingUsers = users.length - maxVisible;


  return (
    <div className={styles.container}>

      <div className={styles.avatars}>

        {visibleUsers.map((user) => (
          <Avatar
            key={user.id}
            src={user.avatar}
            name={user.name}
            size="small"
          />
        ))}


        {remainingUsers > 0 && (
          <div className={styles.more}>
            +{remainingUsers}
          </div>
        )}

      </div>

    </div>
  );
}


export default TaskAssignees;