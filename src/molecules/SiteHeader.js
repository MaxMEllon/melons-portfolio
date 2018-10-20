import React from "react";
import styled from "styled-components";

import colors from "../constants/colors";

const HeaderBlock = styled.div`
  background-color: ${colors.pink};
  height: 10vh;
  width: 100vw;
  line-height: 10vh;
`;

const P = styled.p`
  color: ${colors.white};
  padding-left: 20px;
  font-size: 2em;
`;

const Header = () => (
  <HeaderBlock>
    <P>maxmellon.github.io</P>
  </HeaderBlock>
);

export default Header;
