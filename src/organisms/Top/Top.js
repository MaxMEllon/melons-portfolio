import React from 'react'
import { random, times } from 'lodash/fp'
import styled, { keyframes } from 'styled-components'
import SiteHeader from '../../molecules/SiteHeader'
import colors from '../../constants/colors'

const BackGround = styled.div`
  background-color: ${colors.cyan};
  width: 100vw;
  height: 100vh;
`
const Line = styled.div`
  position: fixed;
  width: 1000vw;
  height: 2px;
  background-color: white;
  top: 90%;
`

const animation = (i, type) => keyframes`
  0% {
    ${type}: ${i * 10}%;
  }

  50% {
    ${type}: ${-i}%;
  }

  100% {
    ${type}: ${i * 10}%;
  }
`

const ballCrateor = (idx, type) => styled.div`
  animation: ${animation(idx, type === 'bottom' ? 'left' : 'right')} ease 6s;
  position: fixed;
  width: 20px;
  height: 20px;
  top: 95%;
  ${type === 'bottom' ? 'left' : 'right'}: ${idx * 10}%;
  background-color: white;
`

const TopBalls = times((i) => ballCrateor(i, 'top'), 20)
const BottomBalls = times((i) => ballCrateor(i, 'bottom'), 20)

const Top = () => (
  <BackGround>
    <SiteHeader />
  </BackGround>
)

export default Top