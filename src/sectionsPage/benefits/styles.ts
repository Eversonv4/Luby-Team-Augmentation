import styled, { keyframes } from "styled-components";
import { IoMdCheckmark } from "react-icons/io";

const AnimateBottom = keyframes`
  from {
				bottom: -100px;
				opacity: 0;
			}
			to {
				bottom: 0;
				opacity: 1;
			}
`;

export const Container = styled.section`
  background-color: #010006;
  height: 590px;

  background-image: url(/assets/background-sections/benefits-luby-bg-azul.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right;
`;

export const ContainerLayout = styled.article`
  max-width: 1170px;
  margin: 0 auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
  animation-name: ${AnimateBottom};
  animation-duration: 1.5s;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 2.25rem;

  max-width: 720px;

  margin-bottom: 25px;
`;

export const TitleContrast = styled.strong`
  color: ${({ theme }) => theme.colors.primary};

  font-weight: 400;
`;

export const CheckIcon = styled(IoMdCheckmark)`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  padding: 12px;
  border-radius: 50%;
  box-sizing: content-box;

  margin-right: 15px;
`;

export const BenefitsList = styled.ul`
  max-width: 720px;

  li {
    font-family: ${({ theme }) => theme.fonts.manrope};
    color: ${({ theme }) => theme.colors.text};

    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
`;

export const BenefitsText = styled.h3`
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;
`;
