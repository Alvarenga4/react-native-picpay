import React from 'react';
import {Container, Option, Title, Img} from './styles';

import img08 from '../../images/08.png';
import img09 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const options = [
  {
    key: String(Math.random()),
    bgColor: '#172c4a',
    title: 'Pague sua contas sem sair de casa',
    img: img08,
  },
  {
    key: String(Math.random()),
    bgColor: '#6a0159',
    title: 'Pague sua contas sem sair de casa',
    img: img09,
  },
  {
    key: String(Math.random()),
    bgColor: '#4159c8',
    title: 'Pague sua contas sem sair de casa',
    img: img10,
  },
  {
    key: String(Math.random()),
    bgColor: '#00ab4b',
    title: 'Pague sua contas sem sair de casa',
    img: img11,
  },
  {
    key: String(Math.random()),
    bgColor: '#ba2f76',
    title: 'Pague sua contas sem sair de casa',
    img: img12,
  },
];

const Tips = () => {
  return (
    <Container>
      {options.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
};

export default Tips;
