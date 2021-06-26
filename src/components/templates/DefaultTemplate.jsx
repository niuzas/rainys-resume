import React from 'react';
import 'normalize.css';

import Section from '../molecules/Section/Section';
import Intro from '../organisms/Intro/Intro';
import Skills from '../organisms/Skills/Skills';
import Experience from '../organisms/Experience/Experience';
import Knowledge from '../organisms/Knowledge/Knowledge';
import Education from '../organisms/Education/Education';

import data from '../../data.json';
import profilePhoto from '../../static/profile_photo.jpg';

const DefaultTemplate = () => {
  return (
    <>
      <Section sectionTitle="">
        <Intro
          photo={profilePhoto}
          name={data.intro.name}
          email={data.intro.email}
          phone={data.intro.phone}
          title={data.intro.title}
        ></Intro>
      </Section>
      <Section sectionTitle="Main skills">
        <Skills skills={data.skills}></Skills>
      </Section>
      <Section sectionTitle="Experience">
        <Experience experience={data.experience}></Experience>
      </Section>

      <Section sectionTitle="Knowledge">
        <Knowledge knowledge={data.knowledge}></Knowledge>
      </Section>

      <Section sectionTitle="Education">
        <Education education={data.education}></Education>
      </Section>
    </>
  );
};

export default DefaultTemplate;
