import styled from "styled-components";

export const SvgContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: ${({ half }) => (half ? "50%" : "100%")}; */
  justify-content: center;
  height: ${({ small }) => (small ? "200px" : "auto")};
  width: ${({ small }) => (small ? "150px" : "auto")};

  /* @media (max-width: 700px) {
    width: 99%;
  } */
`;
