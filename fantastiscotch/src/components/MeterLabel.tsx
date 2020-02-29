import styled from "styled-components/macro";
import Row from "./Row";
import { fgDarkest } from "../constants/colorTheme";

export default styled(Row)`
  font-weight: bold;
  font-size: 1.125rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  ${fgDarkest}
`;
