import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import Area from "../templates/Area";

const HeaderBlock = styled(Area)`
  display: flex;
  align-items: center;
  background-color: ${colors.yellow};
  line-height: 100%;
  width: 100%;
  height: 100%;
`;

const P = styled.p`
  color: ${colors.white};
  padding-left: 20px;
  font-bold: 100;
  font-size: 40px;
`;

const Header = () => (
  <HeaderBlock area="head">
    <P>maxmellon.github.io</P>
  </HeaderBlock>
);

export default Header;
