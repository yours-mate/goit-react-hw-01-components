import PropTypes from 'prop-types';

export default function FriendListItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <li className="item">
      <span className={isOnline ? 'online' : 'offline'}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
