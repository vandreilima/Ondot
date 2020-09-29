import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAan8v4C32gc5ukymAESLM0AW9Xgu3jER8",
  authDomain: "on-dot.firebaseapp.com",
  databaseURL: "https://on-dot.firebaseio.com",
  projectId: "on-dot",
  storageBucket: "on-dot.appspot.com",
  messagingSenderId: "313777671662",
  appId: "1:313777671662:web:552e3046f6c330bde2d2ff"
};

firebase.initializeApp(firebaseConfig);

export function cadastroFuncionario(nomeFuncionario, sobreNome, genero, funcao, observacao, email, foto) {


  firebase.storage().ref('Fotos Funcionarios').child(nomeFuncionario + " " + sobreNome).put(foto)

  firebase.database().ref('Funcionarios').child(nomeFuncionario + " " + sobreNome).set({


    Nome: nomeFuncionario,
    SobreNome: sobreNome,
    Genro: genero,
    Funcao: funcao,
    Observacao: observacao,
    Email: email,
    Foto: foto,

  });


}

export function excluirPedido(id) {



  firebase.database().ref('Pedidos/').child(id).remove();


}

export default firebase