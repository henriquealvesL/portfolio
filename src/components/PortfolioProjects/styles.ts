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

    }
  }
`

export const PortfolioProject = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  gap: 3rem;

  & + &{
    margin-top: 1rem;
    border-top: 1px solid #282c34;
  }

  .project-preview{
    border-radius: 8px;
    width: 540px;
    height: 600px;
  }

  @media (max-width: 768px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    .project-preview{
        padding: 0.5rem;
        width: 320px;
        height: 375px;
      }
  }
`

export const ProjectDescription = styled.div`
  max-width: 550px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.7rem;


  h3{
    font-size: 1.5rem;
    margin-bottom: 8px;
    color: #bfb664;
  }

  h4{
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color:#FFFFFFCC;
    text-align: center;
    font-weight: 400;
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

  @media (max-width: 768px) {
    gap: 0.5rem;
    width: 350px;
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
