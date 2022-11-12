import styled from "styled-components";

export const ContainerSectionSkills = styled.section`
  .div-container-section-skills {
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

  p {
    font-weight: 400;
    font-size: 16px;
    text-align: center;
  }

  .div-svgs {
    padding-top: 10px;
    max-width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    img {
      width: 48px;
      height: 48px;
    }

    .icon-express {
      width: 100px;
      height: 33px;
    }
  }
`;
