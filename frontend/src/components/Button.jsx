import React from 'react'

const Button = ({ children, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded cursor-pointer transition-transform transform hover:scale-105 shadow-md"
      >
        {children}
      </button>
    </div>
  )
}

export default Button
