import React from 'react';
import 'normalize.css';

import Section from '../molecules/Section/Section';
import Intro from '../organisms/Intro/Intro';
import Skills from '../organisms/Skills/Skills';
import Experience from '../organisms/Experience/Experience';
import Knowledge from '../organisms/Knowledge/Knowledge';
import Education from '../organisms/Education/Education';
import Footer from '../organisms/Footer/Footer';

import data from '../../data/data.json';
import profilePhoto from '../../static/profile_photo.jpg';

import * as S from './DefaultTemplate.style';

const DefaultTemplate = () => {
  return (
    <S.TemplateBlock>
      <S.GridLayout>
        <S.TopArea>
          <Section sectionTitle="">
            <Intro
              photo={profilePhoto}
              name={data.intro.name}
              email={data.intro.email}
              phone={data.intro.phone}
              title={data.intro.title}
            ></Intro>
          </Section>
        </S.TopArea>
        <S.LeftArea>
          <Section sectionTitle="Main skills">
            <Skills skills={data.skills}></Skills>
          </Section>
          <Section sectionTitle="Education">
            <Education education={data.education}></Education>
          </Section>
        </S.LeftArea>

        <S.RightArea>
          <Section sectionTitle="Knowledge">
            <Knowledge knowledge={data.knowledge}></Knowledge>
          </Section>

          <Section sectionTitle="Experience">
            <Experience experience={data.experience}></Experience>
          </Section>
        </S.RightArea>

        <S.FooterArea>
          <Footer></Footer>
        </S.FooterArea>
      </S.GridLayout>
    </S.TemplateBlock>
  );
};

export default DefaultTemplate;
