// LeftArrow.js
import React from 'react';
import { LeftOutlined } from '@ant-design/icons';

const LeftArrow = ({ onClick }) => {
  return <LeftOutlined onClick={onClick} style={{ fontSize: '24px', cursor: 'pointer' }} />;
};

export default LeftArrow;
