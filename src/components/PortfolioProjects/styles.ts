import { styled } from "styled-components"

export const PortfolioProject = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap : 16px;
  padding: 16px;

  & + &{
    margin-top: 16px;
    border-top: 1px solid #282c34;
  }

  img{
    border-radius: 8px;
  }

  @media (max-width: 768px){
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 400px;
        height: 184px;
      }
  }
`

export const ProjectDescription = styled.div`
  max-width: 350px;
  height: 315px ;
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  h3{
    margin-bottom: 8px;
    color: #bfb664;
    font-size: 24px;
  }

  .used-techs{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    margin: 8px 0 8px;

    @media (max-width: 768px) {
      img{
        height: 40px;
        width: 40px;
      }
    }
  }
`

export const ProjectLinksContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 8px;

  a{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 150px;
    text-decoration: none;
    border: 1px solid #282c34;
    border-radius: 8px;
    padding: 8px;
    color: #FFF;

    a:first-child{
      margin-right: 8px;
    }

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8);
    }
  }
`
