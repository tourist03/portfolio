import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import codechefIcon from './codechef.jpeg';
import LeetcodeIcon from './leetcode.png';

const CodingProfiles = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      platform: "CodeChef",
      username: "vineet_03",
      rating: "1883",
      link: "https://www.codechef.com/users/vineet_03",
      achievements: [
        "All India Rank: Top 100 in CodeChef Contest",
        "Current Rating: 1883 (4★)",
        "Highest Rating: 1883 (Division 2)",
        "Problems Solved: 64+",
        "Contest Participation: Regular participant",
        "Bronze Badge - Contest Contender",
        "Bronze Badge - Problem Solver"
      ],
      customIcon: codechefIcon,
      description: "Competitive Programming Platform"
    },
    {
      platform: "LeetCode",
      username: "vineet_03",
      rating: "1600",
      link: "https://leetcode.com/u/vineet_03/",
      achievements: [
        "Contest Rating: 1600",
        "Regular contest participant",
        "Active problem solver",
        "Solved 500+ problems",
        "Proficient in Data Structures & Algorithms"
      ],
      customIcon: LeetcodeIcon,
      description: "Coding Practice Platform"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x" />

      <motion.button
        onClick={() => navigate('/')}
        className="mb-8 text-gray-400 hover:text-white flex items-center gap-2 glass px-4 py-2 rounded-lg"
        whileHover={{ x: -5 }}
      >
        ← Back to Home
      </motion.button>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center gradient-text"
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
                className="glass rounded-2xl p-8 hover-lift"
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="glass p-4 rounded-xl">
                    <img 
                      src={profile.customIcon} 
                      alt={`${profile.platform} icon`}
                      className="w-16 h-16 object-contain transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold gradient-text">
                      {profile.platform}
                    </h2>
                    <p className="text-gray-400 mt-2">{profile.description}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-gray-300">@{profile.username}</span>
                      <span className="glass px-4 py-1 rounded-full text-sm">
                        Rating: {profile.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {profile.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-blue-400 mt-1">•</span>
                      <span className="text-gray-300">{achievement}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="mt-8 glass px-6 py-3 rounded-lg inline-flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <span>View Full Profile</span>
                  <span className="text-xl">→</span>
                </motion.div>
              </motion.div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg">
            Regular participation in competitive programming contests helps me stay sharp and solve complex problems efficiently.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CodingProfiles; 