import React from 'react';

import * as S from './Intro.style';

const Intro = ({ name, email, phone }) => (
  <S.IntroBlock>
    <S.IntroName>{name}</S.IntroName>
    <S.IntroTextItem>{email}</S.IntroTextItem>
    <S.IntroTextItem>{phone}</S.IntroTextItem>
  </S.IntroBlock>
);

export default Intro;
