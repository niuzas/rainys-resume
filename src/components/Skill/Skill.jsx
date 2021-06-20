import React from 'react';

import * as S from './Skill.style';

const Skill = ({ skillName, skillLevel }) => {
  let skill = `${skillName}: `;
  for (let i = 1; i <= 5; i++) {
    if (i <= skillLevel) skill += ' \u25B0 ';
    else skill += ' \u25B1 ';
  }
  return <S.SkillItem>{skill}</S.SkillItem>;
};

export default Skill;
