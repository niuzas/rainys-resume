import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';

import * as S from './Section.style';

const Section = ({ sectionTitle, children }) => (
  <S.SectionBlock>
    <SectionHeader sectionTitle={sectionTitle}></SectionHeader>
    {children}
  </S.SectionBlock>
);

export default Section;
