import React from 'react'

const Input = ({
    name,
    onChange, 
    placeholder,
    type,
    value,
    error
}) => {
  return (
         <div>
          <input
            onChange={onChange}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            className="w-full bg-green-50 rounded-md mt-2 p-2"
          />
          <p className="text-xs text-red-700">{error}</p>
        </div>
  )
}

export default Input