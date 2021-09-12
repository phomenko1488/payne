import React from "react";
import styled from 'styled-components'

const Container = styled.div`
  & {
    text-align: center;
    max-width: 310px;
    padding: 2em;
    border-radius: 2em;
    background-color: whitesmoke;
    border-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
    border-image-width: 2em;
  }
  & div:not(:first-child) {
    padding: 0.3em 0;
  }
;
`

class RoundedContainer extends React.Component {

    render() {
        return <Container>{this.props.children}</Container>
    }
}

export default RoundedContainer