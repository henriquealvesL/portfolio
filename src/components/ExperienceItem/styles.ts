import styled from "styled-components"

export const ExperienceCard = styled.div`
  border: 1px solid rgba(139, 139, 139, 0.2);
  border-radius: 0.375rem;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: border-color 0.3s;

  &:hover {
    border-color: #c5c56c;
  }
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

export const HeaderContent = styled.div``

export const JobTitle = styled.h3`
  color: #c5c56c;
  font-size: 1.25rem;
  font-weight: 500;
`

export const CompanyInfo = styled.p`
  color: #8b8b8b;
`

export const ToggleButton = styled.button`
  background: none;
  color: #c5c56c;
  border: none;
`

export const ExpandedContent = styled.div`
  margin-top: 1rem;
  color: #8b8b8b;
`

export const DescriptionList = styled.ul`
  list-style-type: disc;
  padding-left: 1.25rem;
  margin-bottom: 1rem;
`

export const DescriptionItem = styled.li`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`

export const TechSection = styled.div`
  margin-top: 1rem;
`

export const TechTitle = styled.p`
  color: #bfb664;
  margin-bottom: 0.5rem;
`

export const TechContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const TechBadge = styled.div`
`
