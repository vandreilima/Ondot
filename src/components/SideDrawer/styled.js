import styled from 'styled-components';

export const Container = styled.button`

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 25px;
  width: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
 
  :focus {
    outline: none;
  }

.linha {
  width: 100%;
  height: 2px;
  background:  -webkit-linear-gradient(right, #f2f2ff,#f2f2ff);
  -webkit-text-fill-color: transparent;

  :hover {
    transition: 0.8s;
    color: #797778;
    background:  -webkit-linear-gradient(right,#797778,#797778);
  -webkit-text-fill-color: transparent;
  }
}
`;
export const ContainerSide = styled.nav`


.MenuLateral.abrir {
  transform: translateX(0)
}






.MenuLateral {
  height: 100%;
  border-radius: 4px;
  background: rgba(0,0,0,0.8);
  box-shadow: 2px 0px 9px rgba(0,0,0,0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  max-width: 30%;
  max-width: 300px;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;

  @media( max-width: 800px){
    width: 60%;
  }

  width: 100%;
  z-index: 200;

ul {
  display: flex;
  flex-direction: column;
}

li {
  margin-top: 10px;
}

.botao {
  margin-top: 10px;
  font-weight: bolder;
  margin: 0px 0px 0px 10px;
  cursor: pointer;
  transition: 0.8s;
  color: #f2f2ff;
  :hover {
    transition: 0.8s;
    color: #797778;
  }
}
}
`;
