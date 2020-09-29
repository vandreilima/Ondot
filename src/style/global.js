import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');



*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

}

html,body, #root {
  font-family: 'Quicksand', sans-serif;
  font: 14px ;
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  background-image: linear-gradient(970deg,#00bfff,#00bfff);
}

body, input,header, button {
  font-family: 'Quicksand', sans-serif;
  font: 14px ;
}

a {
  text-decoration: none;
  
}

ul {

}

button {
  cursor: pointer
}

`
