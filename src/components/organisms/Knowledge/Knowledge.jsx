import React from 'react';
import Item from '../../molecules/Item/Item';

import * as S from './Knowledge.style';

const Knowledge = ({ knowledge }) => {
  const knowledgeGeneration = (knowledge) => {
    let generatedKnowledge = [];
    generatedKnowledge = knowledge.map((knw) => <Item key={knw} itemText={knw}></Item>);
    return generatedKnowledge;
  };
  return <S.KnowledgeBlock>{knowledgeGeneration(knowledge)}</S.KnowledgeBlock>;
};

export default Knowledge;
