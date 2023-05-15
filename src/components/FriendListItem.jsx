import React from 'react';
import PropTypes from "prop-types";

const FriendListItem = ({avatar, name, isOnline, id}) => {
    return (
        <li class="item">
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}

export default FriendListItem