import React from 'react';
//import skills from './data/skills';
const skills = [
  { id: 1, name: 'JavaScript', level: 'Advanced' },
  { id: 2, name: 'React', level: 'Intermediate' },
  { id: 3, name: 'CSS', level: 'Advanced' },
];

const Skills= () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id} className="mb-2">
            <span className="font-semibold">{skill.name}</span>: {skill.level}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
