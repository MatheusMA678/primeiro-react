import React from 'react';
import '../App.css'
import Titulo from './Titulo'

const Content = (props) => {
  return (
    <main>
      <Titulo conteudo="React"></Titulo>
      <Titulo conteudo="Matheus"></Titulo>
      <Titulo conteudo="PC"></Titulo>
    </main>
  );
}

export default Content;