import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-64 min-h-full bg-gray-900 p-6 flex flex-col justify-between text-gray-300">
      <div>
        <h2 className="text-3xl font-bold text-white mb-8">SkillSwap</h2>
        <ul className="space-y-6 font-semibold">
          <li
            className="hover:text-indigo-500 cursor-pointer transition-colors"
            onClick={() => navigate("/skill")}
          >
            Add Skills
          </li>
          <li
            className="hover:text-indigo-500 cursor-pointer transition-colors"
            onClick={() => navigate("/profile")}
          >
            User Profile
          </li>
        </ul>
      </div>
      <button
        className="mt-8 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
        onClick={() => {
          // Add logout logic here
          alert("Logged out");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
