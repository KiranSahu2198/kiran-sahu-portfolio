import React from 'react';

const Skills: React.FC = () => {
  const skills: string[] = [
    'React JS',
    'Redux',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'SASS',
    'Ajax',
    'JSON',
    'jQuery',
    'Bootstrap',
    'NPM',
    'Azure DevOps',
    'Git',
    'JIRA',
    'Postman',
    'VS Code',
    'Spring Tool Suite',
    'Visual Studio',
    'Sublime',
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;