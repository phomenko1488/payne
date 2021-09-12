import React from "react";
import styled from 'styled-components'

const FlexBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
`

class CenterFlexBox extends React.Component {

    render() {
        return <FlexBox>{this.props.children}</FlexBox>
    }
}

export default CenterFlexBox