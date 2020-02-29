import styled from "styled-components/macro";
import Column from "./Column";
import { bgNeutral } from "../constants/colorTheme";

export default styled(Column)`
  min-height: 100vh;
  min-width: 100vw;
  ${bgNeutral};
`;
