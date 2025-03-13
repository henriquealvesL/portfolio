import { styled } from "styled-components";

export const Container = styled.div`
  margin:32px 0 32px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #282c34;

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

export const PortfolioProject = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap : 16px;
  padding: 16px;
  overflow-x: hidden;

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
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  h3{
    margin-bottom: 8px;
    color: #bfb664;
  }

  p{
    font-size: 0.875rem;
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

  @media (max-width: 768px) {
    img{
      width: 30px;
      height: 30px;
    }
  }

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
    color: #bfb664;

    a:first-child{
      margin-right: 8px;
    }

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8);
    }
  }
`
