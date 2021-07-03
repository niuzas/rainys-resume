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
  gap: 2rem;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const PhotoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IntroName = styled.span`
  margin: 1rem;
  font-size: 2rem;
  font-weight: 700;
`;
export const IntroTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const IntroEmail = styled.a`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0.2rem;
  text-decoration: none;
`;

export const IntroPhone = styled.a`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0.2rem;
  text-decoration: none;
`;
