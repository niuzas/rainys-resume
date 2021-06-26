import React from 'react';
import Period from '../Period/Period';


import * as S from './Experience.style';

const Experience = ({ experience }) => {
  const experienceGeneration = (experience) => {
    let experiencesArr = [];
    experiencesArr = experience.map((exp) => (
      <Period
        key={exp.Title}
        title={exp.title}
        dateFrom={exp.dateFrom}
        dateTo={exp.dateTo}
        description={exp.description}
      ></Period>
    ));

    return experiencesArr;
  };

  return <S.ExperienceBlock>{experienceGeneration(experience)}</S.ExperienceBlock>;
};

export default Experience;
