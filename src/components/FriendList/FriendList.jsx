import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
const FriendList = ({ friends }) => {
  return (
    <div className={styles.friendList}>
      <ul className={styles.list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={styles.item} key={id}>
            <div className={styles.Content}>
              <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
              <p className={styles.name}>{name}</p>
              <p className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
                {isOnline ? 'Online' : 'Offline'}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default FriendList;