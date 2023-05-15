import React from 'react';
import TransactionHistoryItem from './TransactionHistoryItem';
import PropTypes from "prop-types";


const TransactionHistory = ({items}) => {
  return (
    <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item => 
        <TransactionHistoryItem 
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
        />)}
  </tbody>
</table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.array
}

export default TransactionHistory