import styled from "styled-components";
import { Card } from "antd";

export const StyledCard = styled(Card)`
  backdrop-filter: blur(15px);
  background-color: rgba(178, 60, 253, 0);
  padding: ${({ small }) => (small ? "5px" : "10px")};
  width: 100%;
  height: auto;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
