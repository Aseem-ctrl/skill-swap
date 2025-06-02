import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6 py-12">

      {/* Hero Section */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-400 mb-2 drop-shadow-lg">SkillSwap</h1>
        <p className="text-xl md:text-2xl text-indigo-200 font-medium mb-2">Peer Learning Marketplace</p>
        <p className="text-md md:text-lg text-gray-400 mb-6 max-w-xl mx-auto">
          Unlock your potential by sharing and learning new skills with peers worldwide.
        </p>
        <Button
          className="bg-indigo-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-transform hover:scale-105 text-lg font-semibold"
          onClick={() => navigate("/auth")}
        >
          Get Started
        </Button>
      </div>

      {/* Features Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Our Features</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Discover what makes SkillSwap unique and how it empowers you to grow and connect.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full mb-12">
        {[
          {
            icon: (
              <path d="M12 4v16m8-8H4" />
            ),
            title: "Skill Exchange",
            desc: "Trade your skills with others and learn something new every day."
          },
          {
            icon: (
              <>
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12l2 2 4-4" />
              </>
            ),
            title: "Verified Profiles",
            desc: "Connect with trusted peers through verified user profiles and reviews."
          },
          {
            icon: (
              <>
                <path d="M17 20h5v-2a4 4 0 00-3-3.87" />
                <path d="M9 20H4v-2a4 4 0 013-3.87" />
                <path d="M12 10V6a4 4 0 00-8 0v4" />
                <path d="M20 10a4 4 0 01-8 0" />
              </>
            ),
            title: "Community Support",
            desc: "Join a vibrant community and get help or feedback anytime."
          }
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl h-44 shadow-md flex flex-col items-center justify-center text-indigo-400 p-6 hover:shadow-xl transition"
          >
            <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {feature.icon}
            </svg>
            <h3 className="font-bold text-lg text-white mb-1">{feature.title}</h3>
            <p className="text-gray-400 text-sm text-center">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-600 rounded-2xl shadow-lg px-8 py-8 text-center text-white max-w-2xl w-full animate-fade-in-up">
        <h3 className="text-2xl font-bold mb-2">Ready to start your learning journey?</h3>
        <p className="mb-4">Sign up now and connect with peers to exchange skills and knowledge!</p>
        <Button
          className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold shadow hover:bg-indigo-100 transition"
          onClick={() => navigate("/auth")}
        >
          Join SkillSwap
        </Button>
      </div>
    </div>
  );
};

export default Landing;
