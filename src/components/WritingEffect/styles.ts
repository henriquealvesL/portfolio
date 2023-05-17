import styled, { keyframes } from 'styled-components';

const blinkTextCursor = keyframes`
  from {border-right-color: rgba(191, 182, 100, .75);}
  to {border-right-color: transparent}
`;

export const Container = styled.div`
  margin-left: 25%;
  color: #BFB664;
  width: 250px;

  @media (max-width: 768px) {
    margin-left: 0;
  }

  span{
    font-size: 48px;

    @media (max-width: 768px) {
    font-size: 32px;
  }
  }
`;

export const TextCursor = styled.span`
  border-right: 2px solid rgba(191, 182, 100, .75);
  display: inline;

  /* A mágica acontece aqui */
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;
