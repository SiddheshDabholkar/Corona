import styled from "styled-components";

export const MainContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ auto }) => (auto ? "auto" : "800px")};
  background-color: #74ebd5;
  background-image: linear-gradient(
    180deg,
    #74ebd5 0%,
    #c2cbf7 50%,
    #e3eceb 100%
  );
`;
