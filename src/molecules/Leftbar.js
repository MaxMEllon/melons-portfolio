import React from "react";
import styled from "styled-components";
import Fa from 'react-icons/fa'
import colors from "../constants/colors";
import Area from '../templates/Area'

const LeftbarBlock = styled(Area)`
  display: flex;
  line-height: 100%;
  align-items: center;
  padding: 20px 0;
  color: ${colors.white};
  flex-direction: column;
  font-size: 18px;
  width: 30%;
  height: calc(100% - 40px);
  background-color: rgba(230, 162, 186, 0.67);
  transition-property: all;
  transition: 0.1s linear;

  :hover {
    background-color: ${colors.pink};
    width: 100%;
  }
`;

const Leftbar = () => (
  <LeftbarBlock area={"left"}>
    <Fa.FaGithub />
  </LeftbarBlock>
);

export default Leftbar;