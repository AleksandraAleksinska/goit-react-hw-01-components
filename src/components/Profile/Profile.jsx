import React from 'react';
import PropTypes from "prop-types";
import css from '../Profile/Profile.module.css';

const Profile = ({username, tag, location, avatar, stats}) => {
  return (
    <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      class={css.avatar}
    />
    <p class={css.name}>{username}</p>
    <p class={css.tag}>@{tag}</p>
    <p class={css.location}>{location}</p>
  </div>

  <ul class={css.stats}>
    <li class={css.statsItem}>
      <span class={css.label}>Followers </span>
      <span class={css.quantity}>{stats.followers}</span>
    </li>
    <li class={css.statsItem}>
      <span class={css.label}>Views </span>
      <span class={css.quantity}>{stats.views}</span>
    </li>
    <li class={css.statsItem}>
      <span class={css.label}>Likes </span>
      <span class={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
}

export default Profile
