import React from 'react';
import Period from '../../molecules/Period/Period';
import * as S from './Education.style';

const Education = ({ education }) => {
  const educationGeneration = (education) => {
    let generatedEducation = [];
    generatedEducation = education.map((edc) => (
      <Period dateFrom={edc.dateFrom} dateTo={edc.dateTo} title={edc.title} description={edc.description}></Period>
    ));
    return generatedEducation;
  };
  return <S.EducationBlock>{educationGeneration(education)}</S.EducationBlock>;
};

export default Education;
