import React from 'react';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

import * as S from './SkillLevel.style';

const SkillLevel = ({ skillLevelNumber }) => {
  let skillLevel = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= skillLevelNumber) skillLevel = [...skillLevel, <FaCircle />];
    else skillLevel = [...skillLevel, <FaRegCircle />];
    // if (i <= skillLevelNumber) skillLevel += ' \u25B0 ';
    // else skillLevel += ' \u25B1 ';
  }
  return <S.SkillLevelBlock>{skillLevel}</S.SkillLevelBlock>;
};

export default SkillLevel;
