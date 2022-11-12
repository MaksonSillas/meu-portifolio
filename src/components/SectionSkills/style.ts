import styled from "styled-components";

export const ContainerSectionSkills = styled.section`
  margin-top: 25px;

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
    padding: 10px 0;
    max-width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;

    img {
      width: 48px;
      height: 48px;
    }

    .icon-express {
      width: 100px;
      height: 33px;
    }
  }

  a {
    color: var(--verde-1);
  }
`;
