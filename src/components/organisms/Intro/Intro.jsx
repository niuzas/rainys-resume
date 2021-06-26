import React from 'react';

import * as S from './Intro.style';

const Intro = ({ photo, name, email, phone, title }) => {
  const emailLink = `mailto:${email}`;
  const phoneLink = `tel:${phone}`;

  return (
    <S.IntroBlock>
      <S.IntroPhoto src={photo} alt="" />
      <S.IntroName>{name}</S.IntroName>
      <S.IntroTitle>{title}</S.IntroTitle>
      <S.IntroEmail href={emailLink}>{email}</S.IntroEmail>
      <S.IntroPhone href={phoneLink}>{phone}</S.IntroPhone>
    </S.IntroBlock>
  );
};

export default Intro;
