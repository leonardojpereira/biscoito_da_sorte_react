import React, { Component } from 'react';
import Button from "./components/Button";
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textMessage: ''
    };

    this.showMessage = this.showMessage.bind(this);

    this.messages = ['“O sucesso não vem até si, é você que vai até ele.”', 
       '“As dores não são eternas, se permita, o seu melhor é o suficiente”.',
      '"Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você."',
      '"Não compense na ira o que lhe falta na razão."', 
      '"Defeitos e virtudes são apenas dois lados da mesma moeda."',
      '"Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida."',
      '"A maior de todas as torres começa no solo."',
       '"Sua visão se tornará clara apenas quando você puder olhar dentro de seu coração."',
      '"Conhecimento é a única virtude e ignorância é o único vício."', 
      '"Deixe de lado as preocupações e seja feliz."',
      '"O nosso primeiro e último amor é… o amor-próprio."', 
      '"O verdadeiro homem mede a sua força, quando se defronta com o obstáculo."',
      '"Você sempre será a sua melhor companhia!"',
      '"Você precisa fazer aquilo que pensa que não é capaz de fazer."',
      '"Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos."',
      '"Não importa o tamanho da montanha, ela não pode tapar o sol."',
      '“Não é uma vida ruim, é apenas um dia ruim, lembre-se disso”.',
      "“O êxito é a somatória dos pequenos esforços repetidos diariamente”.",
      '“Da mesma forma que a felicidade não dura para sempre, a tristeza também não”.',
      '“Você é maior do que toda essa tormenta, seja resiliente”.',
      '“Se nada der certo hoje, acorde mais cedo amanhã e tente novamente”.',
      '“Mesmo que a jornada seja lenta, abrir mão não acelera”',
      '“O futuro ainda não chegou, seja grato pelo agora.”',
      '“A superação da dificuldade depende apenas de você“.',
      '“Domine os seus medos!”.',
      '“Você não está voltando para trás, então não olhe para lá”.',
      '“A sua competição é com você mesmo”.',
    ]

  
  }

showMessage() {
  let state = this.state;
  let randomNumber = Math.floor(Math.random() * this.messages.length);
  state.textMessage = this.messages[randomNumber];
  this.setState(state);

}

  render() {
    return (
      <div className="container">
        <h1 className="title">Biscoito da Sorte</h1>
        <img className="img" src={require('./assets/logo_cookie.png')} alt="logo_cookie" />
        <Button name="Abrir biscoito" actionBtn={this.showMessage}/>
        <h3 className="text">{this.state.textMessage}</h3>
      </div>
    );
  }
}

export default App;
