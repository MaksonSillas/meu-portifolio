import styled from "styled-components";

export const DivContainerNav = styled.div`
  background-color: var(--cinza);
  border-left: 1px solid var(--preto);
  border-bottom: 1px solid var(--preto);
  border-radius: 0 0 0 10px;
  position: absolute;
  top: 100%;
  right: 0;
  width: 150px;
  padding: 10px;
  animation: navAnimation 0.5s;

  @media (min-width: 700px) {
    display: none;
  }

  @keyframes navAnimation {
    0% {
      transform: translateX(240px);
    }
    65% {
      transform: translateX(-30px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  a {
    font-weight: 600;
    font-size: 20px;
    color: var(--verde-1);
  }
`;
