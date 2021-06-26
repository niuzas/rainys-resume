import React from 'react';

import * as S from './Item.style';

const Item = ({ itemText }) => <S.ItemBlock key={itemText}>{itemText}</S.ItemBlock>;

export default Item;
