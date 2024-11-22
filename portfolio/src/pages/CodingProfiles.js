import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CodingProfiles = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      platform: "CodeChef",
      username: "vineet_03",
      rating: "1883 (4★)",
      link: "https://www.codechef.com/users/vineet_03",
      achievements: [
        "Highest Rating: 1883 (Division 2)",
        "Problems Solved: 64+",
        "Contest Participation: 5 contests",
        "Bronze Badge - Contest Contender",
        "Bronze Badge - Problem Solver"
      ],
      color: "from-brown-400 to-yellow-600",
      icon: "👨‍🍳"
    },
    {
      platform: "LeetCode",
      username: "vineet_03",
      link: "https://leetcode.com/u/vineet_03/",
      achievements: [
        "Active problem solver",
        "Regular contest participant"
      ],
      color: "from-orange-400 to-yellow-500",
      icon: "🏆"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gray-900 text-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.button
        onClick={() => navigate('/')}
        className="mb-8 text-gray-400 hover:text-white flex items-center gap-2"
        whileHover={{ x: -5 }}
      >
        ← Back to Home
      </motion.button>

      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          Competitive Programming Profiles
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.platform}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="block"
            >
              <motion.div
                className="h-full p-6 bg-gray-800 rounded-xl hover:bg-gray-700/80"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{profile.icon}</span>
                  <div>
                    <h2 className={`text-2xl font-bold bg-gradient-to-r ${profile.color} text-transparent bg-clip-text`}>
                      {profile.platform}
                    </h2>
                    <p className="text-gray-400">@{profile.username}</p>
                  </div>
                </div>

                {profile.rating && (
                  <div className="mb-4">
                    <span className="text-xl font-semibold text-yellow-400">
                      Rating: {profile.rating}
                    </span>
                  </div>
                )}

                <div className="space-y-2">
                  {profile.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CodingProfiles; 