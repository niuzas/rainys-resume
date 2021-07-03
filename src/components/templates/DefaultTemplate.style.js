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
    'top'
    'left'
    'right'
    'footer';
  grid-template-rows: auto;
  grid-template-columns: auto;
  justify-content: center;
  gap: 1rem;
  @media only screen and (min-width: 992px) {
    width: 950px;
    display: grid;
    grid-template-areas:
      'top  top'
      'left right'
      'footer footer';
    grid-template-rows: auto;
    grid-template-columns: 5fr 5fr;
    justify-content: center;
    gap: 1rem;
  }
`;

export const TopArea = styled.div`
  grid-area: top;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const LeftArea = styled.div`
  grid-area: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
export const RightArea = styled.div`
  grid-area: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const FooterArea = styled.div`
  grid-area: footer;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
