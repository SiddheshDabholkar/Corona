import styled from "styled-components";

export const MainContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ auto }) => (auto ? "auto" : "800px")};
`;
