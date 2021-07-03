import styled from 'styled-components';

export const TemplateBlock = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: lightgray;
`;

export const GridLayout = styled.div`
  width: 600px;
  display: grid;
  grid-template-areas:
    'intro'
    'skills'
    'knowledge'
    'education'
    'experience';
  grid-template-rows: auto;
  grid-template-columns: auto;
  justify-content: center;
  gap: 0.5rem;
  @media only screen and (min-width: 992px) {
    width: 950px;
    display: grid;
    grid-template-areas:
      'intro skills'
      'intro knowledge'
      'education experience';
    grid-template-rows: auto;
    grid-template-columns: 5fr 5fr;
    justify-content: center;
    gap: 0.5rem;
    
  }
`;

export const Intro = styled.div`
  grid-area: intro;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Skills = styled.div`
  grid-area: skills;
  display: flex;
  justify-content: center;
  align-items: center
`;
export const Knowledge = styled.div`
  grid-area: knowledge;
  display: flex;
  justify-content: center;
  align-items: center
`;
export const Education = styled.div`
  grid-area: education;
  display: flex;
  justify-content: center;
  align-items: center
`;
export const Experience = styled.div`
  grid-area: experience;
  display: flex;
  justify-content: center;
  align-items: center
`;
