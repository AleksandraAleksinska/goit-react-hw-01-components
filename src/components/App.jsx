import { Fragment } from "react";
import Profile from '../components/Profile/Profile';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends';
import transactions from '../data/transactions';
import Statistics from '../components/Statistics/Statistics';
import FriendList from '../components/FriendList/FriendList';
import TransactionHistory from "./TransactionHistory";



export const App = () => {
  return (
    <Fragment>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics 
        title="Upload stats" 
        stats ={data}
      />
      <FriendList friends={friends}       
      />
      <TransactionHistory items={transactions} />
     
    </Fragment>
  );
};
