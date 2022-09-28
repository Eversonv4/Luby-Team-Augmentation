import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.bg_cards};
  padding: 60px 0;
`;

export const ContainerLayout = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.colors.text_dark};
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 3.125rem;
`;

export const TitleHighlight = styled.h3`
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 500;
  letter-spacing: 2px;
  color: #1d1d1f66;

  text-align: center;
`;

export const AcordeonContainer = styled.div`
  max-width: 570px;
  border: 1px solid red;
`;

interface Open {
  open: boolean;
}

export const ContentBox = styled.div<Open>`
  position: relative;

  & label {
    font-family: ${({ theme }) => theme.fonts.manrope};
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text_dark};
    cursor: pointer;

    ::before {
      content: "›";
      position: absolute;
      top: 5px;
      right: 20px;
      font-size: 1.5rem;
      transition: 1s ease;
      transform: ${({ open }) => (open ? "rotate(90deg)" : "")};
    }
  }
`;

export const ContentText = styled.div<Open>`
  position: relative;
  padding: 0 10px;
  background-color: #f3f3f1;
  transition: max-height 2s ease;
  overflow: hidden;
  overflow-y: hidden;

  height: 0;
  transition: height 2s ease;

  &.active {
    height: 300px;
  }
  -webkit-scrollbar: none;
`;
