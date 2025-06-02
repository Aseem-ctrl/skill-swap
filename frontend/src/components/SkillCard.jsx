import React from 'react'

const SkillCard = ({ title }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md text-center hover:shadow-lg transition cursor-pointer">
      <h3 className="text-md font-semibold text-gray-200">{title}</h3>
    </div>
  )
}

export default SkillCard
