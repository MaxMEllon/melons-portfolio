import React from "react";
import styled, { keyframes } from "styled-components";

const fade = keyframes`
  0% {
    background-color: rgba(255, 255, 255, 0);
    width: 60px;
    height: 60px;
    top: calc(50vh - 30px);
    left: calc(50vw - 30px);
  }

  50% {
    background-color: rgba(255, 255, 255, 0.8);
    width: 120px;
    height: 120px;
    top: calc(50vh - 60px);
    left: calc(50vw - 60px);
  }

  100% {
    background-color: rgba(255, 255, 255, 0);
    width: 60px;
    height: 60px;
    top: calc(50vh - 30px);
    left: calc(50vw - 30px);
  }
`;

const LoadingPresenter = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 120px;
  animation: ${fade} 1s ease infinite;
`;

export default function Loading({ loading }) {
  if (!loading) return null;
  return <LoadingPresenter />;
}
