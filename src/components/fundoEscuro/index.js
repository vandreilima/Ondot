import React, { Component } from 'react';
import { FundoEscuroCSS } from './styled'

class FundoEscuro extends Component {

  render() {
    return (
      <FundoEscuroCSS onClick={this.props.click} />
    )
  }
}

export default FundoEscuro;
