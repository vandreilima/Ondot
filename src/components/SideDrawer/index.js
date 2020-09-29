import React, { Component } from 'react';
import { ContainerSide } from './styled'

class SideDrawer extends Component {
  render() {
    let classEstilo = 'MenuLateral'

    if (this.props.show) {
      classEstilo = 'MenuLateral abrir'
    }
    return (
      <ContainerSide>
        <nav class={classEstilo}>
          <ul>
            <li><a href="/" className="botao">DashBord</a></li>
            <li><a href="/Funcionarios" className="botao">Funcionarios</a></li>
            <li> <a href="/" className="botao">....</a></li>
          </ul>
        </nav>
      </ContainerSide >
    )
  }
}
export default SideDrawer;
