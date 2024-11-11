import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

interface IconProps {
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ size = 24, color = '#000' }) => {
  return <FaEnvelope size={size} color={color} />;
};

export default Icon;
