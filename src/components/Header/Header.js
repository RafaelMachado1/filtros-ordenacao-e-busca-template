import React from "react";
import { Container } from "./styles";

const Header = ({id, setId, nome, setNome, tipo, setTipo, ordenar, setOrdenar}) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  const onChangeId = (event) => {
    setId(event.target.value)
  }

  const onChangeNome = (event) => {
    setNome(event.target.value)
  }

  const onChangeTipo = (event) => {
    setTipo(event.target.value)
  }

  const onChangeOrdenar = (event) => {
    setOrdenar(event.target.value)
  }


  



  return (
    <Container>
      <input type="number" placeholder="Buscar por id" onChange={(event)=> onChangeId(event)}/>
      <input type="text" placeholder="Buscar por nome" onChange={(event)=> onChangeNome(event)}/>

      <select onChange={(event)=> onChangeOrdenar(event)}>
        <option value="">Ordenar</option>
        <option value="Crescente">Crescente</option>
        <option value="Decrescente">Decrescente</option>
      </select>

      
      <select value={""} onChange={(event) =>
        onChangeTipo(event)} name="tipo" id="tipo">
        <option value="" >Selecione um tipo</option>

        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
