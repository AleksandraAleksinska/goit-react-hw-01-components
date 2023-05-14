import React from 'react'

const TransactionHistoryItem = ({id, type, amount, currency}) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )
}

export default TransactionHistoryItem