import React from 'react';

import * as S from './Period.style';

const Period = ({ dateFrom, dateTo, title, description }) => (
  <S.PeriodBlock>
    <S.Title>{title}</S.Title>
    <S.Interval>
      {dateFrom}-{dateTo}
    </S.Interval>
    <S.Description>{description}</S.Description>
  </S.PeriodBlock>
);

export default Period;
