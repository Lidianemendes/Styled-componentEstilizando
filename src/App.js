import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
margin:0;
padding:0;
box-sizing: border-box;
}
body{
  background-color:pink;
  margin-top:35vh;
  margin-left:36vw;
}
`;
const Title = styled.h1`
  font-size: 6vh;
  margin-left: 8vh;
  height: 18vh;
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
const Meubotao = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 18px;
  border-radius: 8px;
  color: palevioletred;
  border: 3px solid palevioletred;
  margin-left: 10vw;
  margin-top: 9vh;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
  }
`;

export default class Calc extends Component {
  state = {
    n1: null,
    n2: null,
    result: ""
  };

  handleChangeOne = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };
  handleChangeTwo = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };
  mult = () => {
    let { n1, n2 } = this.state;
    if ((n1 && n2 !== null) || "") {
      this.setState({
        result: n1 * n2
      });
    } else {
      this.setState({
        result: "você ainda não digitou um valor nos inputs"
      });
    }
  };
  dividir = () => {
    let { n1, n2 } = this.state;
    if ((n1 && n2 !== null) || "") {
      this.setState({
        result: n1 / n2
      });
    } else {
      this.setState({
        result: "você ainda não digitou um valor nos inputs"
      });
    }
  };
  subtrair = () => {
    let { n1, n2 } = this.state;
    if ((n1 && n2 !== null) || "") {
      this.setState({
        result: n1 - n2
      });
    } else {
      this.setState({
        result: "você ainda não digitou um valor nos inputs"
      });
    }
  };
  somar = () => {
    let { n1, n2 } = this.state;
    if ((n1 && n2 !== null) || "") {
      this.setState({
        result: n1 + n2
      });
    } else {
      this.setState({
        result: "você ainda não digitou um valor nos inputs"
      });
    }
  };
  clear = () => {
    let { n1, n2, result } = this.state;
    if ((n1 && n2 !== null) || "") {
      this.setState({
        result: 0,
        n1: "",
        n2: ""
      });
    } else {
      this.setState({
        result: "você ainda não digitou um valor nos inputs"
      });
    }
  };
  render() {
    let { n1, n2, result } = this.state;
    let {
      handleChangeOne,
      handleChangeTwo,
      mult,
      dividir,
      subtrair,
      somar,
      clear
    } = this;
    return (
      <div>
        <GlobalStyle />
        {console.log(n1, n2, result)}
        <Title>React App Calc</Title>
        <h2>{result}</h2>
        <div>
          <Input value={n1} onChange={handleChangeOne} type="number" />
          <Input value={n2} onChange={handleChangeTwo} type="number" />
        </div>
        <Meubotao>
          <button onClick={mult}>*</button>
          <button onClick={dividir}>/</button>
          <button onClick={subtrair}>-</button>
          <button onClick={somar}>+</button>
          <button onClick={clear}>C</button>
        </Meubotao>
      </div>
    );
  }
}
