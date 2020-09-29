import React, { Component } from 'react';
import { Container } from './styled'

class DrawerToggleButton extends Component {


  render() {
    return (
      <Container onClick={this.props.click} >
        <div className="linha" />
        <div className="linha" />
        <div className="linha" />
      </Container>
    )
  }
}
export default DrawerToggleButton;
