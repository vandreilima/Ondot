import React, { Component } from 'react';
import { Container } from './styled'


import DrawerToggleButton from '../SideDrawer/DrawerToogleButton'

class Header extends Component {


  render() {
    return (
      <Container >
        <nav className="navegation">
          <div>
            <DrawerToggleButton click={this.props.abrir} />

          </div>
          {// <div><img className="logo" src={icone} alt="Ondog"></img></div>
          }
          <div className="espaco" />
          <div className="navegation_itens">
            <ul>
              {// <li><a href="/" className="botao">Funcionarios</a></li>
                //  <li><a href="/" className="botao"></a></li>
                // <li> <a href="/" className="botao">INFORMAÇÂO</a></li>
              }
            </ul>
          </div>
        </nav>
      </Container>
    );
  }
}

export default Header;
