import styled from "styled-components";

export const RestContainer = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  justify-content: center;
  align-items: center;
  width: 100%;
`;
