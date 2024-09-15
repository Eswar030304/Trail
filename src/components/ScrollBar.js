// src/components/ScrollBar.js
import React from 'react';
import styled from 'styled-components';

const ScrollBarWrapper = styled.div`
  overflow-y: auto;
  max-height: 80vh;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

function ScrollBar({ children }) {
  return <ScrollBarWrapper>{children}</ScrollBarWrapper>;
}

export default ScrollBar;
