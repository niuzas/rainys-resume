import React from 'react';
import * as S from './Skills.style';

import SkillLevel from '../SkillLevel/SkillLevel';

const Skills = ({ skills }) => {
  const skillsGenerated = (skills) => {
    const skillsArr = skills.reduce(
      (skills, skillData) => [
        ...skills,
        <SkillLevel key={skillData.name} skillLevelNumber={skillData.level}></SkillLevel>,
      ],
      []
    );
    return skillsArr;
  };

  return (
    <S.SkillsBlock>
      <S.SkillsNames>
        {skills.map((skill) => (
          <div>{skill.name}:</div>
        ))}
      </S.SkillsNames>
      <S.SkillsLevels>{skillsGenerated(skills)}</S.SkillsLevels>
    </S.SkillsBlock>
  );
};

export default Skills;
