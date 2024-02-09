import React from 'react';
import styles from './FriendList.module.css';  // CSS-модулі для стилізації
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <div className={styles.friendList}>
      <ul className={styles.friendList__list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={styles.friendList__item} key={id}>
            <div className={styles.friendList__itemContent}>
              <img className={styles.avatarFriends} src={avatar} alt={name} />
              <p className={styles.friendList__name}>{name}</p>
              <span className={`${styles.friendList__status} ${isOnline ? styles.online : styles.offline}`}>
                {isOnline ? 'Online' : 'Offline'}
              </span>
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
