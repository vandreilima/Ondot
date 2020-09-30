import React, { Component } from 'react';
import { Container, Forme } from './style'
import Header from '../../components/Header'
import SideDrawer from '../../components/SideDrawer/index'
import FundoEscuro from '../../components/fundoEscuro/index'
import 'semantic-ui-css/semantic.min.css'
import { cadastroFuncionario } from '../../fireBase'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const generoOpicoes = [
  { key: 'm', text: 'Masculino', value: 'Masculino' },
  { key: 'f', text: 'Femenino', value: 'Femenino' },
  { key: 'o', text: 'Outro', value: 'Outro' },
]
class Cadastro extends Component {
  state = {
    abrirMenu: false,
    image: []
  }
  abrirMenu = () => {
    this.setState((prevState) => {
      return { abrirMenu: !prevState.abrirMenu }
    })
  }
  fecharMenu = () => {
    this.setState({ abrirMenu: false })
  }
  uploadFile = event => {

    var image = event.target.files[0]

    this.setState({
      image
    })
  }
  handelClick() {
    var nome = document.getElementById('Nome').value
    var sobreNome = document.getElementById('SobreNome').value
    var genero = document.getElementById('Genero').innerText
    var funcao = document.getElementById('Funcao').value
    var observacao = document.getElementById('Observacao').value
    var email = document.getElementById('Email').value
    var foto = this.state.image

    cadastroFuncionario(nome, sobreNome, genero, funcao, observacao, email, foto)

  }
  render() {

    let fundoEscuro;

    if (this.state.abrirMenu) {

      fundoEscuro = <FundoEscuro click={this.fecharMenu} />
    }
    return (
      <Container>
        <Header abrir={this.abrirMenu} />
        <SideDrawer show={this.state.abrirMenu} />
        {fundoEscuro}
        <Forme>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field
                id='Nome'
                control={Input}
                label='Nome'
                placeholder='Primeiro Nome'
              />
              <Form.Field
                id='SobreNome'
                control={Input}
                label='Sobrenome'
                placeholder='Sobrenome'
              />
              <Form.Field
                id='Genero'
                control={Select}
                options={generoOpicoes}
                label={{ children: 'Genero', htmlFor: 'form-select-control-gender' }}
                placeholder='Genero'
                search
                searchInput={{ id: 'form-select-control-gender' }}
              />
              <Form.Field
                id='Funcao'
                control={Input}
                label='Função'
                placeholder='Função'
              />
            </Form.Group>
            <Form.Field
              id='Observacao'
              control={TextArea}
              label='Observação'
              placeholder='Observação'
            />
            <Form.Field>
              <label>Foto</label>
              <input id="Foto" type='file' onChange={this.uploadFile} style={{ display: "hidden" }} max={5} placeholder='Foto Perfil' />
            </Form.Field>
            <Form.Field
              id='Email'
              control={Input}
              label='Email'
              placeholder='joe@gmail.com'
            />
            <Form.Field
              id='form-button-control-public'
              control={Button}
              content='Confirmar'
              onClick={() => this.handelClick()}
              label='Confirmar Funcionario'
            />
          </Form>
        </Forme>
      </Container>
    );
  }
}

export default Cadastro;