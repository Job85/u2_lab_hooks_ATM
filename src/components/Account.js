import React, { useState } from 'react'
import '../styles/App.css'

const Account = (props) => {
  let [amount, setAmount] = useState(0)
  let [balance, setBalance] = useState(0)

  const handleClick = (e) => {
    e.preventDefault()
    if (isNaN(amount) || ((amount) < 0)) {
      console.log('Not a number')
    } else {
      setBalance(balance + Number(amount))
    }
    setAmount(0)
  }

  const withdrawClick = (e) => {
    e.preventDefault()
    if (isNaN(amount) || ((amount) < 0)) {
      console.log('Not a number')
    } else if (Number(amount) > balance) {
      alert('Not enough funds')
    } else {
      setBalance(balance - Number(amount))
    }
    setAmount(0)
  }

  let balanceClass = 'balance'
  if (balance <= 0) {
    balanceClass += ' zero'
  }

  return (
    <div className="account">
      <h2>{props.name}</h2>
      <div className={balanceClass}>${balance}</div>
      <br />
      <div>
        <input
          className="input"
          type="text"
          placeholder="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <br />
        <input
          className="btn"
          type="submit"
          value="Deposit"
          onClick={handleClick}
        />
        <input
          className="btn"
          type="submit"
          value="Withdraw"
          onClick={withdrawClick}
        />
      </div>
    </div>
  )

}

export default Account
