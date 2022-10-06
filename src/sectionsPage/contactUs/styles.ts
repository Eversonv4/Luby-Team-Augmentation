import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.text};
  padding: 70px 0;
`;

export const ContainerLayout = styled.div`
  max-width: 1170px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  @media (max-width: 940px) {
    padding: 0 30px;
    flex-direction: column;
  }
`;

export const Span = styled.span`
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text_dark + "88"};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 500;

  font-size: 1rem;
  line-height: 1.125rem;
  letter-spacing: 2px;

  @media (max-width: 940px) {
    display: block;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 4.0625rem;

  @media (max-width: 940px) {
    text-align: center;
  }

  @media (max-width: 420px) {
    text-align: center;
    font-size: 2rem;
    line-height: 2.25rem;
  }
`;

export const ContactTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 300;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text_dark};

  margin-top: 50px;

  @media (max-width: 940px) {
    text-align: center;
    margin-top: 30px;
  }

  @media (max-width: 420px) {
    margin-top: 15px;
  }
`;

export const FormContainer = styled.div`
  max-width: 622px;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.manrope};

  & input,
  & textarea {
    width: 100%;
    padding: 15px;
    background-color: #f5f8f9;

    font-family: ${({ theme }) => theme.fonts.manrope};
    color: #212121;
    font-size: 1.125rem;
    line-height: 1;

    font-weight: normal;

    outline: none;
    border: none;

    ::placeholder {
      font-family: ${({ theme }) => theme.fonts.manrope};
      color: #212121aa;

      font-weight: 300;
      font-size: 1.125rem;
      line-height: 1;
    }
  }

  & textarea {
    min-height: 150px;
    resize: vertical;
  }

  & button {
    background-color: #004bed;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.manrope};
    font-size: 1.125rem;
    line-height: 1;
    font-weight: bold;

    border: none;

    transition: 0.8s ease;

    width: 100%;
    padding: 15px 0;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.colors.hover_button};
    }
  }

  @media (max-width: 940px) {
    max-width: 100%;
    margin-top: 15px;
  }
`;

export const InputLayout = styled.div`
  max-width: 622px;
  width: 100%;

  margin-bottom: 15px;
`;

export const ErrorMessage = styled.p`
  width: fit-content;

  font-family: ${({ theme }) => theme.fonts.oswald};
  background-color: #f00;
  color: #fff;

  padding: 0 10px;

  margin-left: 10px;
`;
