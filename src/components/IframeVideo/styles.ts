import styled from "styled-components";

export const Container = styled.article`
  max-height: 506px;
  max-width: 900px;

  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.15);

  transition: 0.5s ease;

  iframe {
    min-height: 506px;

    @media (max-width: 1024px) {
      min-height: 480px;
    }

    @media (max-width: 768px) {
      min-height: 360px;
    }

    @media (max-width: 600px) {
      min-height: 280px;
    }

    @media (max-width: 400px) {
      min-height: 150px;
    }
  }

  @media (max-width: 1024px) {
    height: 480px;
    max-width: 800px;
  }

  @media (max-width: 768px) {
    height: 360px;
    max-width: 600px;
  }

  @media (max-width: 600px) {
    height: 280px;
    max-width: 400px;
  }

  @media (max-width: 414px) {
    height: 150px;
    max-width: 320px;
  }
`;
