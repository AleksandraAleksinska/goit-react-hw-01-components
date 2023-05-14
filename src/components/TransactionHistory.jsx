import React from 'react';
import TransactionHistoryItem from './TransactionHistoryItem';


const TransactionHistory = ({items, children}) => {
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
            id={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
        />)}
  </tbody>
</table>
  )
}

export default TransactionHistory