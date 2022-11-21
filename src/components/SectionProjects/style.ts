import styled from "styled-components";

export const ContainerSectionProjects = styled.section`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .div-container-section-projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
  }

  h2 {
    font-weight: 600;
    font-size: 28px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    text-align: center;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 900px;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px 10px 0 10px;
  }

  li {
    position: relative;
    width: max-content;
    max-width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      border: 2px solid var(--branco);
    }

    .hover-projects {
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 5px;
      border: 2px solid var(--verde-1);
      background-color: var(--preto-1);
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: my_opacity 0.8s;
      padding: 2px;
      gap: 20px;
      overflow-y: auto;

      @keyframes my_opacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      .header-project {
        width: 100%;
        display: flex;
        gap: 2px;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          background-color: var(--azul);
          color: var(--branco);
          width: 50%;
          text-align: center;
          padding: 5px 0;
          border-radius: 5px;
          transition: 0.5s;

          :hover {
            background-color: var(--azul-1);
          }
        }
      }
    }
  }
`;
