import React, { useState } from 'react'

const Input = ({ type, className }) => {
  const [time, setTime] = useState();

  const handleChange = (e) => {
    console.log(e.target)
    setTime(e.target.value);
  }

  return (
    <input type={type} className={className} value={time} onChange={handleChange} />
  )
}

export default Input