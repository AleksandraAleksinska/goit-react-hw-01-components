import React from 'react'
import FriendListItem from './FriendListItem';
import PropTypes from "prop-types";



const FriendList = ({friends}) => {

  return (
    <ul class="friend-list">
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

FriendList.propTypes = {
  friends: PropTypes.array
}


export default FriendList;