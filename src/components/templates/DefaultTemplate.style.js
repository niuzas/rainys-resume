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
  width: 1080px;
  display: grid;
  grid-template-areas:
    'intro skills'
    'intro knowledge'
    'education experience';
  grid-template-rows: auto;
  grid-template-columns: 5fr 5fr;
  justify-content: center;
  gap: 0.5rem;
`;

export const Intro = styled.div`
  grid-area: intro;
`;
export const Skills = styled.div`
  grid-area: skills;
`;
export const Knowledge = styled.div`
  grid-area: knowledge;
`;
export const Education = styled.div`
  grid-area: education;
`;
export const Experience = styled.div`
  grid-area: experience;
`;
