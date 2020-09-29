import React, { Component } from 'react';
import { Container } from './styled'
import 'semantic-ui-css/semantic.min.css'

export class CrudFuncionarios extends Component {



  render() {
    const nome = this.props.Nome
    const sobreNome = this.props.SobreNome
    const funcao = this.props.Funcao
    const horasTrabalhada = this.props.horasTrabalhada
    const bancoHoras = this.props.BancoHoras
    var img = this.props.img

    if (!img) {
      var img = "https://i.pinimg.com/564x/eb/ca/a1/ebcaa107e84dbaa6f50392bb7050c3b8.jpg"
    }

    //
    return (
      <Container>
        <div class="ui card">

          <div class="ui mediun image" size='small'><img src={img} alt='Funcionario' />
          </div>
          <div class="content">
            <div class="header">{nome + ' ' + sobreNome}</div>
            <div class="meta">{funcao}</div>

            <div class="description">Horas Mes: {horasTrabalhada}h.</div>
          </div><div class="extra content"><i aria-hidden="true" class="time icon">
          </i>Saldo de Horas: {bancoHoras}h.<a><i style={{ marginLeft: '10px' }} aria-hidden="true" class="remove circle icon"></i></a>

          </div>
        </div>
      </Container>
    );
  }
}

export class CrudNovoFuncionarios extends Component {
  render() {
    return (
      <Container>
        <div class="ui card">
          <div class="ui mediun image" ><img src="https://www.lrcb.nl/resources/uploads/2017/09/unknown_person-1024x1024-300x300.png" />
          </div>
          <div class="content">
            <div class="header">Novo Funcionario</div>
            <div class="meta">Setor</div>

            <div class="description">Horas Mes: 00h.</div>
          </div>
          <div class="extra content"><a href="/Cadastro"><i aria-hidden="true" >
          </i><div>
              <button class="ui animated button"><div class="visible content">Cadastrar</div><div class="hidden content"><i aria-hidden="true" class="edit outline icon"></i></div></button>
            </div></a>
          </div>
        </div>
      </Container>
    );
  }
}