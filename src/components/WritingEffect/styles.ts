import styled, { keyframes } from 'styled-components';

const blinkTextCursor = keyframes`
  from {border-right-color: #bfb664;}
  to {border-right-color: transparent}
`;

export const HeaderContainer = styled.div`
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Highlight = styled.span`
  color: #bfb664;
`;

export const TextCursor = styled.span`
  border-right: 2px solid #bfb664;
  display: inline;
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #9ca3af;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
