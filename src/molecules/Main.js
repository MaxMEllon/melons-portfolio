import React from 'react';
import styled from 'styled-components';
import Area from '../templates/Area';

const Wrapper = styled(Area)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Main = () => <Wrapper area="main" />;

export default Main;
