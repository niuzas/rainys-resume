import React from 'react';
import 'normalize.css';

import Section from './components/Section/Section';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';

import data from './data.json';

console.log(data);
console.log(data.intro.email);
console.log(data.skills);
function App() {
  return (
    <>
      <Section sectionTitle="">
        <Intro name={data.intro.name} email={data.intro.email} phone={data.intro.phone}></Intro>
      </Section>
      <Section sectionTitle="Skills">
        <Skills skills={data.skills}></Skills>
      </Section>
      <Section sectionTitle="Experience">
        <Experience experience={data.experience}></Experience>
      </Section>
    </>
  );
}

export default App;
