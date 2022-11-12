import styled from "styled-components";

export const ContainerSectionMe = styled.section`
  padding: 10px 15px;

  .div-container-section-me {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 28px;
    font-weight: 400;
  }

  p {
    font-size: 28px;
    font-weight: 400;
  }

  .span-blue {
    color: var(--azul);
  }

  .size-20px {
    font-weight: 400;
    font-size: 20px;
  }

  .div-links {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    width: 100%;
    max-width: 350px;
  }

  .color-green {
    background-color: var(--verde-1);
    color: var(--branco);
    font-weight: 600;
    font-size: 24px;
    padding: 5px 0;
    width: 45%;
    text-align: center;
    border-radius: 20px;
    max-width: 166px;
  }
`;
