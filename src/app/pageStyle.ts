import  styled, {keyframes}  from "styled-components";
import { Element } from "react-scroll";

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const Header = styled.header`
  border-bottom: 1px solid #282c34;
`;

export const DescriptionContainer = styled(Element)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .arrow-down {
    animation: ${bounceAnimation} 1s infinite;
  }

`;

export const Subtitle = styled(Element)`
  font-size: 2rem;
  text-align: center;
  margin-top: 2rem;
  font-weight: normal;
`

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border-bottom: 1px solid #282c34;
  padding: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const AboutText = styled.p`
  width: 48rem;
  text-align: justify;

  & + &{
    margin-top: 16px;
  }

  .highlight{
    color: #bfb664
  }

  @media (max-width: 768px) {
    width: 300px;
  }
`

export const AboutTechs = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  img{
    margin: 0 8px;
  }

  @media (max-width: 768px) {
    img{
    height: 40px;
    width: 40px;
  }
  }
`

export const ContactContainer = styled.div`
  margin: 32px 0 32px;
  display: flex;
  justify-content: center;
  gap: 32px;

  a{
    text-decoration: none;
    transition: transform 0.3s ease;

    &:hover{
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContactMethod = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 170px;
  gap: 8px;

  span{
    font-size: 1rem;
    color: #fff;
  }

  small{
    font-size: 0.875rem;
    color: #828282;
  }
`

export const ContactIcon = styled.div`
  border-radius: 50%;
  background-color: #282c34;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;

  img{
    width: 20px;
    height: 20px;
  }
`
