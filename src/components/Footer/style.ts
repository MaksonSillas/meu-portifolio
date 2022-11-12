import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;

  .div-container-footer {
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 900px;
    border-top: 1px solid var(--cinza);
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
