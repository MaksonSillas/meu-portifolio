import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  border-bottom: 1px solid var(--cinza);
  position: fixed;
  width: 100vw;
  background-color: var(--branco);

  .div-container {
    width: 100%;
    padding: 15px 15px 10px 15px;
    display: flex;
    justify-content: space-between;
  }

  .p-descktop {
    display: none;
  }

  .nav-descktop {
    display: none;
  }

  @media (min-width: 700px) {
    border-bottom: unset;
    position: unset;
    width: unset;

    .div-container {
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding-bottom: 0;
    }

    .p-descktop {
      display: flex;
      align-items: center;

      img {
        width: 20px;
      }

      span {
        color: var(--cinza);
        font-size: 14px;
      }
    }

    .nav-descktop {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      max-width: 900px;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--cinza);
    }

    .ul-descktop {
      display: flex;
      gap: 20px;
      max-width: 460px;

      li {
        border-left: 1px solid var(--cinza);
        padding-left: 20px;
      }

      a {
        color: var(--verde-1);
        font-size: 20px;
      }
    }

    button,
    svg {
      display: none;
    }
  }

  img {
    width: 70px;

    border-radius: 100%;

    @media (min-width: 700px) {
      width: 200px;
    }
  }

  button {
    background-color: unset;
  }
`;
