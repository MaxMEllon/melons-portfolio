import React from "react";
import styled from "styled-components";
import SiteHeader from "../../molecules/SiteHeader";
import colors from "../../constants/colors";

const BackGround = styled.div`
  background-color: ${colors.cyan};
  width: 100vw;
  height: 100vh;
`;

const Top = () => (
  <BackGround>
    <SiteHeader />
  </BackGround>
);

export default Top;
