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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
