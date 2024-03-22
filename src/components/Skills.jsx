import { useState, useEffect } from "react";
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
    <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 h-screen">
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Tools Used</p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">My Skills</h2>
      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className="block-container w-20 h-20" key={skill.name}>
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={urlFor(skill.icon)}
                alt={skill.name}
                className="w-[80%] h-[80%] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;
