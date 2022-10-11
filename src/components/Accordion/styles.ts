import styled, { keyframes } from "styled-components";
import { FiChevronRight } from "react-icons/fi";
import { IoMdHelpCircle } from "react-icons/io";
import { IAccordionOpen } from "./interface";

const changeOpacity = keyframes`
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
`;

export const AcordeonContainer = styled.div`
  max-width: 570px;
  border-bottom: 2px solid #d7d7d7;
`;

export const ArrowRightIcon = styled(FiChevronRight).attrs({
  size: 20,
})`
  box-sizing: "content-box";
  color: #ccc;
`;
export const HelpIcon = styled(IoMdHelpCircle).attrs({
  size: 25,
})`
  box-sizing: "content-box";
`;

export const ContentBox = styled.div<IAccordionOpen>`
  position: relative;

  & label {
    background-color: ${({ theme }) => theme.colors.text};

    color: ${({ theme }) => theme.colors.text_dark};
    font-family: ${({ theme }) => theme.fonts.manrope};
    font-size: 1.125rem;
    line-height: 1.5rem;

    width: 100%;
    padding: 15px 20px 15px 5px;

    position: relative;
    display: flex;
    align-items: center;

    cursor: pointer;

    & span {
      width: 80%;
    }

    & svg {
      margin: 0 10px;
    }

    & .arrow-right-rotate {
      position: absolute;
      right: 0px;
      font-size: 1.5rem;
      transition: 0.7s ease;
      transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "")};
    }
  }
`;

export const ContentText = styled.div<IAccordionOpen>`
  position: relative;
  background-color: #f3f3f1;
  transition: max-height 2s ease;
  overflow: hidden;
  overflow-y: hidden;
  padding: 0;

  height: 0;
  transition: height 0.7s ease;

  &.active {
    height: ${({ AccordeonHeight }) => AccordeonHeight || "auto"};
  }

  & ul {
    list-style: disc;
    padding-left: 10px;
  }

  & p {
    padding: 15px 30px;
  }

  & li {
    margin: 10px 40px;
    padding-left: 5px;
  }

  & p,
  & li {
    text-align: justify;
    font-family: ${({ theme }) => theme.fonts.manrope};
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text_dark};
  }

  @media (max-width: 600px) {
    overflow: auto;
  }
`;
