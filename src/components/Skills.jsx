import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import client, { urlFor } from '../utils/client';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "techTools"]';
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 h-full">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center items-center">
        {skills.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="w-1/2 sm:w-1/4 p-4 flex flex-col items-center"
            key={skill.name}
          >
            <div className="w-20 h-20 rounded-full p-2 flex items-center justify-center" style={{ backgroundColor: '#fff' }}>
              <img src={urlFor(skill.icon)} alt={skill.name} />
            </div>
            <p className="mt-2 text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills;
