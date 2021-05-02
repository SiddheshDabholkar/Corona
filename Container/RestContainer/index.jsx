import styled from "styled-components";

export const RestContainer = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${({ padding }) => (padding ? "10px" : "")};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "")};
`;
