import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RegraLink = styled(Link)`
      text-decoration: none;

  span {
  flex:1;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  color: #fff;
  }
`


export const Container = styled.nav`
  width: 100%;
  position: absolute;
  height: 56px;
  top: 0;
  left: 0;
 
.espaco {
  flex: 1;
}

li {
  :hover {
        transition: 0.6s;
        color: #000000ff;;
        -webkit-transform: scale(1.2, 1.2);
          transform: scale(1.2, 1.2);
        }
}

.navegation_itens ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  @media( max-width: 768px){
    display: none;
  }
}

.navegation_itens li {
 padding: 0 0.5rem;
}

  .navegation {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;

  }

  .logo {
    max-width: 140px;
    height: 28px;
    margin-left: 1rem;
  }

  .botao {
   margin: 0px 10px 10px 0px;
  
   color: #fff;

    font-size: 16px;
    cursor: pointer;

    :hover {
        transition: 0.8s;
        color: #000000ff;;

        }

  }


`
