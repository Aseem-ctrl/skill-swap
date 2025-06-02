import Sidebar from "../components/Sidebar"

const SkillDashboard = () => {
    return (
        <div className="flex flex-row min-h-screen bg-gray-900 text-gray-300">
            <div className="flex min-h-screen bg-gray-800 shadow-md">
                <Sidebar />
            </div>
            <section className="flex-1 p-8 bg-gray-900">
                <div className="mx-auto rounded-md w-full p-8 bg-gray-800 shadow-md">
                    <h1 className="text-3xl font-semibold text-gray-100">Add Skills</h1>
                </div>
                <div className="flex mt-6 mx-4 gap-6">
                    <div className="flex w-full h-full p-6 bg-gray-800 rounded-md shadow-lg">
                        <form className="w-full space-y-6">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-100">Add Your Skills</h2>
                            <div>
                                <label className="block mb-2 text-gray-400">Skill Name</label>
                                <input
                                    type="text"
                                    className="w-full p-3 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="e.g. JavaScript"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-gray-400">Description</label>
                                <textarea
                                    className="w-full p-3 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Describe your skill"
                                    rows={4}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-gray-400">Credits Required</label>
                                <input
                                    type="number"
                                    className="w-full p-3 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter credits required"
                                    min="0"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 py-3 rounded cursor-pointer"
                            >
                                Add Skill
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SkillDashboard
