import styled from 'styled-components'

const Area = styled.div`
  grid-column: ${(props) => props.area};
  grid-row: ${(props) => props.area};
`

export default Area