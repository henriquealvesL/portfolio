import { styled } from "styled-components";
import { Element } from "react-scroll";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

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

export const PortfolioContainer = styled.div`
  margin:32px 0 32px;
  display: flex;
  flex-direction: column;

  .second-project{
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img{
        width: 400px;
        height: 184px;
      }
    }
  }
`
