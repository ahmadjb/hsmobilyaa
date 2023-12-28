// RightArrow.js
import React from 'react';
import { RightOutlined } from '@ant-design/icons';

const RightArrow = ({ onClick }) => {
  return <RightOutlined onClick={onClick} style={{ fontSize: '24px', cursor: 'pointer' }} />;
};

export default RightArrow;
