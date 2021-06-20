import React from 'react';
import 'normalize.css';

import Section from './components/Section/Section';
import Intro from './components/Intro/Intro';
import Skill from './components/Skill/Skill';

import data from './data.json';

console.log(data);
console.log(data.intro.email);
const App = () => (
  <>
    <Section sectionTitle="">
      <Intro name={data.intro.name} email={data.intro.email} phone={data.intro.phone}></Intro>
    </Section>
    <Section sectionTitle="Skills">
      <Skill skillName="Testinis" skillLevel="5"></Skill>
      <Skill skillName="Testinis" skillLevel="3"></Skill>
    </Section>
  </>
);

export default App;
