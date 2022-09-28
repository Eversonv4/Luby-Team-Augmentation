import styled, { keyframes } from "styled-components";

export const AcordeonContainer = styled.div`
  max-width: 570px;
  border: 1px solid red;
`;

interface Open {
  open: boolean;
  height?: string;
}

export const ContentBox = styled.div<Open>`
  position: relative;

  & label {
    font-family: ${({ theme }) => theme.fonts.manrope};
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    position: relative;
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

const show = keyframes`
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
`;

export const ContentText = styled.div<Open>`
  position: relative;
  background-color: #f3f3f1;
  transition: max-height 2s ease;
  overflow: hidden;
  overflow-y: hidden;

  height: 0;
  transition: height 2s ease;

  &.active {
    height: ${({ height }) => height || "auto"};
    animation: ${show} 2s ease;
  }

  & p {
    margin-bottom: 15px;
    padding: 10px 20px;

    font-family: ${({ theme }) => theme.fonts.manrope};
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text_dark};
  }
`;
