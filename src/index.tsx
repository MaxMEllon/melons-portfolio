import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { css, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import reducer, { INITIAL_STATE } from './modules/redux/reducer';
import createStore from './store';
import Top from './organisms/Top';

const myGlobalCss = css`
  body {
    overflow: hidden;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${myGlobalCss}
`;

const store = createStore(reducer, INITIAL_STATE);

const initalRender = () =>
  render(
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Top />
      </Provider>
    </>,
    document.getElementById('root')
  );

document.addEventListener('DOMContentLoaded', initalRender);
