import React from "react";
import styled from "styled-components";
import Area from '../../templates/Area'
import Header from "../../molecules/Header";
import Leftbar from "../../molecules/Leftbar";
import colors from "../../constants/colors";

const template = `
  ".    .    .   "
  ".    body .   "
  ".    .    .   "
`

const Grid = styled.div`
  display: grid;
  grid-template-areas: ${template};
  background-color: ${colors.black};
  grid-template-columns: 1vw 98vw 1vw;
  grid-template-rows: 1fr calc(98vw * 3 / 4) 1fr;
  width: 100vw;
  height: 100vh;
`;

const bodyTemplates = `
  "left head"
  "left body"
`

const Body = styled(Area)`
  display: grid;
  grid-template-areas: ${bodyTemplates};
  grid-template-rows: 50px 1fr;
  grid-template-columns: 15% 1fr;
  background-color: ${colors.cyan};
  width: 100%;
  height: 100%;
`

const Top = () => (
  <Grid>
    <Body area={"body"}>
      <Header />
      <Leftbar />
    </Body>
  </Grid>
);

export default Top;
