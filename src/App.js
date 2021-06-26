import React from 'react';
import 'normalize.css';

import Section from './components/Section/Section';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Knowledge from './components/Knowledge/Knowledge';
import Education from './components/Education/Education';

import data from './data.json';
import profilePhoto from './static/profile_photo.jpg';

function App() {
  return (
    <>
      <Section sectionTitle="">
        <Intro photo={profilePhoto} name={data.intro.name} email={data.intro.email} phone={data.intro.phone}></Intro>
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
}

export default App;
