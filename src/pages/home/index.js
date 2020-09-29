import React, { Component } from 'react';
import { Wrapper, ContainerCentro } from '../home/styled'
import Header from '../../components/Header'
import SideDrawer from '../../components/SideDrawer/index'
import FundoEscuro from '../../components/fundoEscuro/index'
import { Grid, Image, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class Home extends Component {
  state = {
    abrirMenu: false
  }


  abrirMenu = () => {
    this.setState((prevState) => {
      return { abrirMenu: !prevState.abrirMenu }
    })
  }

  fecharMenu = () => {
    this.setState({ abrirMenu: false })
  }

  render() {

    let fundoEscuro;

    if (this.state.abrirMenu) {

      fundoEscuro = <FundoEscuro click={this.fecharMenu} />
    }
    return (
      <Wrapper>
        <Header abrir={this.abrirMenu} />
        <SideDrawer show={this.state.abrirMenu} />
        {fundoEscuro}

        <ContainerCentro>
          <Grid celled>
            <Grid.Row>
              <Grid.Column width={3}>
                <Image src='https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8=s180-rw' />
              </Grid.Column>
              <Grid.Column width={13}>
                <Image src='https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8=s180-rw' />
                <Container>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                    ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                    quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                    arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                    dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                    viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                    Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                 </p>
                </Container>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={3}>
                <Image src='/https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8=s180-rw' />
              </Grid.Column>
              <Grid.Column width={10}>
                <Image src='https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8=s180-rw' />
              </Grid.Column>
              <Grid.Column width={3}>
                <Image src='https://lh3.googleusercontent.com/GPC-DPV91Mp3j7-eFT8Tcs1DG9nZt3QZg7aXbYlhpuX4ec3U58UE8EcmUbCf1ZmnEc8=s180-rw' />
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </ContainerCentro>


      </Wrapper>
    );
  }
}

export default Home;
