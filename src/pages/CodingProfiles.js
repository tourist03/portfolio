import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import codechefIcon from './codechef.jpeg';
import LeetcodeIcon from './leetcode.png';

const CodingProfiles = () => {
  const navigate = useNavigate();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const transformedX = useTransform(mouseX, (value) => `${value}px`);
  const transformedY = useTransform(mouseY, (value) => `${value}px`);

  const handleMouseMove = (event) => {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

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
      description: "Competitive Programming Platform",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10"
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
      description: "Coding Practice Platform",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-500/10"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() + 0.5],
                opacity: [0.1, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <motion.button
          onClick={() => navigate('/')}
          className="mb-8 text-gray-400 hover:text-white flex items-center gap-2 glass px-4 py-2 rounded-lg"
          whileHover={{ x: -5 }}
        >
          ← Back to Home
        </motion.button>

        <motion.h1 
          className="text-6xl font-bold mb-12 text-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Competitive Programming Profiles
          </span>
        </motion.h1>

        <div className="space-y-8 max-w-4xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.platform}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleMouseMove}
              className={`relative block rounded-2xl ${profile.bgColor} 
                         backdrop-blur-xl border border-white/10 overflow-hidden group`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `radial-gradient(
                    circle at var(--mouse-x) var(--mouse-y),
                    rgba(255,255,255,0.1) 0%,
                    transparent 60%
                  )`,
                  "--mouse-x": transformedX,
                  "--mouse-y": transformedY,
                }}
              />

              <div className="p-8">
                <div className="flex items-start gap-6 mb-8">
                  <div className={`p-4 rounded-xl ${profile.bgColor} backdrop-blur-md border border-white/10 group-hover:border-white/20`}>
                    <img 
                      src={profile.customIcon} 
                      alt={`${profile.platform} icon`}
                      className="w-16 h-16 object-contain transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h2 className={`text-3xl font-bold bg-gradient-to-r ${profile.color} text-transparent bg-clip-text`}>
                      {profile.platform}
                    </h2>
                    <p className="text-gray-400 mt-2">{profile.description}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-gray-300">@{profile.username}</span>
                      <span className={`px-4 py-1 rounded-full text-sm ${profile.bgColor} backdrop-blur-md border border-white/10`}>
                        Rating: {profile.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {profile.achievements.map((achievement, idx) => (
                    <motion.div
                      key={achievement}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2" />
                      <span className="text-gray-300">{achievement}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 flex justify-end">
                  <motion.div 
                    className={`px-6 py-3 rounded-xl ${profile.bgColor} backdrop-blur-md border border-white/10 
                              group-hover:border-white/20 transition-all duration-300 flex items-center gap-2`}
                    whileHover={{ x: 5 }}
                  >
                    <span>View Full Profile</span>
                    <span className="text-xl">→</span>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to right, ${profile.color.split(' ')[1]} 0%, transparent 100%)`,
                  opacity: 0.1,
                }}
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-300">
            Regular participation in competitive programming contests helps me stay sharp and solve complex problems efficiently.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CodingProfiles; 