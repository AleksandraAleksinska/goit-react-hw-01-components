import React from 'react'
import FriendListItem from './FriendListItem';




const FriendList = ({friends, children}) => {

  return (
    <ul class="friend-list">
       {friends.map(friend => 
        <FriendListItem 
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            
        />
        )}
    </ul>
  )
}

export default FriendList;