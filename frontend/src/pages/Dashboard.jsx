import Sidebar from '../components/Sidebar'
import { Search, Mail, BookOpen } from 'lucide-react'
import CardModal from '../components/CardModal'
import React, { useState } from 'react'

const skills = [
  { title: 'React.js', desc: 'Build dynamic UIs with components' },
  { title: 'Node.js', desc: 'Backend with JavaScript runtime' },
  { title: 'Public Speaking', desc: 'Improve stage confidence' },
  { title: 'Graphic Design', desc: 'Design with Canva & Figma' },
  { title: 'Time Management', desc: 'Organize and optimize time' },
  { title: 'Python', desc: 'Versatile coding for all domains' },
  { title: 'UX Design', desc: 'Craft seamless user experiences' },
  { title: 'Data Analysis', desc: 'Make sense of complex data' }
]

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const handleOpenModal = (skill) => {
    setSelectedSkill(skill)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedSkill(null)
  }

  const filteredSkills = skills.filter(skill =>
    skill.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen flex bg-gray-900 text-gray-300">
      <div className="h-screen bg-gray-800 shadow-md">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="w-full bg-gray-800 shadow px-6 py-4 flex items-center justify-end">
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-200 placeholder-gray-400"
                aria-label="Search skills"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button
              title="Requests / Messages"
              className="p-2 rounded-full hover:bg-gray-700 transition"
            >
              <Mail className="h-6 w-6 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">
            Recommended Courses
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[900px] overflow-y-auto pr-2">
            {filteredSkills.map((skill, idx) => (
              <div
                onClick={() => handleOpenModal(skill)}
                key={idx}
                className="cursor-pointer"
              >
                <div className="bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="text-indigo-400" />
                    <h3 className="text-lg font-semibold text-gray-100">
                      {skill.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    {skill.desc}
                  </p>
                  <div>
                    <button
                      type="button"
                      className="inline-block text-xs bg-indigo-900 text-indigo-400 px-3 py-1 rounded-full"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {modalOpen && (
        <CardModal skill={selectedSkill} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default Dashboard
