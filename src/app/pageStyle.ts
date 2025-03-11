import { styled } from "styled-components";
import { Element } from "react-scroll";

export const Header = styled.header`
  border-bottom: 1px solid #282c34;
`;

export const ImageDiv = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 25%;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin-top: 16px;
    margin-right: 0;

    .image-me{
      width: 200px;
      height: 200px;
    }
  }
`;

export const DescriptionContainer = styled(Element)`
  margin: 32px 0;
  border-bottom: 1px solid #282c34;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }

`;

export const Subtitle = styled(Element)`
  font-size: 40px;
  text-align: center;
  margin-top: 32px;
  font-weight: normal;
`

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  border-bottom: 1px solid #282c34;
  padding: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const AboutText = styled.p`
  width: 540px;
  font-size: 24px;
  text-align: justify;

  & + &{
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    width: 300px;
    font-size: 16px;

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
    font-size: 24px;
    color: #fff;
  }

  small{
    font-size: 16px;
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
