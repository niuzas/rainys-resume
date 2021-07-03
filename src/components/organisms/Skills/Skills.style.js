import styled from 'styled-components';

export const SkillsBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  color: gray;
  font-size: 1.3rem;
  font-weight: 600;
  gap: 1rem;
`;

export const SkillLogo = styled.img`
  height: 30px;
  margin: 0.3rem;
  border: 1px dotted gray;
`;

export const SkillsNames = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const SkillName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin: 0.3rem;
`;

export const SkillsLevels = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
