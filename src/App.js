import React from 'react';
import 'normalize.css';

import Section from './components/Section/Section';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';

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
    </>
  );
}

export default App;
