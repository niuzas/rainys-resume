import styled from 'styled-components';

export const IntroPhoto = styled.img`
  width: 200px;
  border-radius: 50%;
`;

export const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  color: gray;
`;
export const IntroName = styled.span`
  margin: 0.7rem;
  font-size: 2rem;
  font-weight: 700;
`;
export const IntroTextItem = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const IntroEmail = styled.a`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const IntroPhone = styled.a`
  font-size: 1.3rem;
  font-weight: 600;
`;
