import React, { Component, useState } from 'react';
import { Container, Grid } from './styled'
import Header from '../../components/Header'
import SideDrawer from '../../components/SideDrawer/index'
import FundoEscuro from '../../components/fundoEscuro/index'
import { CrudFuncionarios, CrudNovoFuncionarios } from '../../components/crudFuncionarios'
import * as firebase from 'firebase'


class ConfigFuncionarios extends Component {
  state = {
    funcionarios: [],
    abrirMenu: false,
    img: []
  }



  componentDidMount() {
    var pasta = "Funcionarios"

    const Funcionarios = firebase.database().ref(pasta)
    Funcionarios.on('value', snap => {
      var funcionarios = snap.val()
      if (funcionarios) {
        this.setState({
          funcionarios
        })
      }
      else {
        return false
      }
    })
  }

  abrirMenu = () => {
    this.setState((prevState) => {
      return { abrirMenu: !prevState.abrirMenu }
    })
  }

  fecharMenu = () => {
    this.setState({ abrirMenu: false })
  }


  renderObj = () => {
    const { funcionarios } = this.state
    var pastaImagem = "Fotos Funcionarios"
    const Fotos = firebase.storage().ref(pastaImagem)


    return (
      Object.keys(funcionarios).map((obj, i) => {
        const Foto = Fotos.child(funcionarios[obj].Nome + ' ' + funcionarios[obj].SobreNome).getDownloadURL()
        return (
          <>
            <div key={obj}  >
              <CrudFuncionarios Nome={funcionarios[obj].Nome} SobreNome={funcionarios[obj].SobreNome} Funcao={funcionarios[obj].Funcao} horasTrabalhada={funcionarios[obj].horasTrabalhada} BancoHoras={funcionarios[obj].BancoHoras} />
            </div>
          </>
        )
      }))
  }


  render() {
    const { funcionarios } = this.state
    let fundoEscuro;
    if (this.state.abrirMenu) {
      fundoEscuro = <FundoEscuro click={this.fecharMenu} />
    }
    return (
      <Container>
        <Header abrir={this.abrirMenu} />
        <SideDrawer show={this.state.abrirMenu} />
        {fundoEscuro}
        <Grid>

          {this.renderObj()}

          <CrudNovoFuncionarios />
        </Grid>

      </Container>
    );
  }
}

export default ConfigFuncionarios;
