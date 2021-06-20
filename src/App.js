import React from 'react';
import 'normalize.css';

import SectionHeader from './components/SectionHeader/SectionHeader';
import Intro from './components/Intro/Intro';

import data from './data.json';

console.log(data);
console.log(data.intro.email);
const App = () => (
  <>
    <SectionHeader sectionTitle="Darius Rainys CV"></SectionHeader>
    <Intro name={data.intro.name} email={data.intro.email} phone={data.intro.phone}></Intro>
  </>
);

export default App;
