import React from 'react'
import PropTypes from "prop-types";
import css from './FriendList.module.css'

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
      <li className={css.item}>

        {isOnline === true ? (<span className={css.isOnline}>{isOnline}</span>) : (<span className={css.status}>{isOnline}</span>)}
        
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
  )
}

const FriendList = ({friends}) => {

  return (
    <ul className={css.friendList}>
       {friends.map(friend => 
        <FriendListItem 
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            
        />
        )}
    </ul>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
}

FriendList.propTypes = {
  friends: PropTypes.array
}


export default FriendList;