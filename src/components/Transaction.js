import React from 'react'

export default function Transaction({transaction}) {
    return (
        <li className={transaction.amount<0?'minus':'plus'}>
            {transaction.text} 
            <span>{transaction.amount < 0?'-':'+'}
                ${Math.abs(transaction.amount)}</span>
            <button className="delete-btn">x</button>
        </li>
    )
}
