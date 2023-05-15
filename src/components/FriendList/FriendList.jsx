import React from 'react'
import PropTypes from "prop-types";
import css from './FriendList.module.css'

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
      <li class={css.item}>

        {isOnline === true ? (<span class={css.isOnline}>{isOnline}</span>) : (<span class={css.status}>{isOnline}</span>)}
        
        <img class={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p class={css.name}>{name}</p>
      </li>
  )
}

const FriendList = ({friends}) => {

  return (
    <ul class={css.friendList}>
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