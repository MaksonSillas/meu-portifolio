import styled from "styled-components";

export const ContainerFooter = styled.footer`
  padding: 10px 0;
  margin-top: 10px;
  background-color: var(--cinza);

  .div-container-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
  }

  h2 {
    text-decoration: underline;
    text-decoration-color: var(--verde-2);
    font-weight: 600;
    font-size: 28px;
  }

  .div-contacs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 356px;
    width: 100%;
  }

  .icon-width {
    width: 100px;
  }

  button {
    background-color: transparent;
  }
`;
