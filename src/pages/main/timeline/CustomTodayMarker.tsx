import React from 'react'
import styled, { Interpolation } from 'styled-components'

type Props = {
  styles: React.CSSProperties
}

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.backgroundColors.accent} !important;
`
const CustomTodayMarker = ({styles}: Props) => {
  return (
    <Wrapper style={styles}/>
  )
}

export default CustomTodayMarker