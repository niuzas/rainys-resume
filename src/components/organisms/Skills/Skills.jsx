import React from 'react';
import SkillLevel from '../../molecules/SkillLevel/SkillLevel';

import * as S from './Skills.style';



const Skills = ({ skills }) => {
  const skillsLevelsGeneration = (skills) => {
    const skillsArr = skills.reduce(
      (skills, skillData) => [
        ...skills,
        <SkillLevel
          key={skillData.name}
          skillLevelName={skillData.name}
          skillLevelNumber={skillData.level}
        ></SkillLevel>,
      ],
      []
    );
    return skillsArr;
  };

  return (
    <S.SkillsBlock>
      <S.SkillsNames>
        {skills.map((skill) => (
          <div key={skill.name}>{skill.name}:</div>
        ))}
      </S.SkillsNames>
      <S.SkillsLevels>{skillsLevelsGeneration(skills)}</S.SkillsLevels>
    </S.SkillsBlock>
  );
};

export default Skills;
