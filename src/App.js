import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;


function App() {
  //estados para utilizarmos no onChange do input
  const [id, setId] = useState("")
  const [nome, setNome] = useState("")
  const [tipo, setTipo] = useState("")
  const [ordenar, setOrdenar] = useState("")

  {
  //uma solução diferente usando if + ternário

  /*  const pokemonFiltrado = pokemons.filter((pokemon) => {
    if(pokemon.id === id){
      return pokemon
    }
  }).map((pokemon) => {
    return <PokemonCard
      cardColor={getColors(pokemon.type[0])}
      key={pokemon.id}
      pokemon={pokemon}
    />
  })

*/}



  return (
    <>
      <GlobalStyle />
      {/*como o controle dos inputs está no header e os valores serão consumidos no App.js, precisamos declarar os estados aqui e enviá-los para o header para fazer o controle.*/}
      <Header
        id={id}
        setId={setId}
        nome={nome}
        setNome={setNome}
        tipo={tipo}
        setTipo={setTipo}
        ordenar={ordenar}
        setOrdenar={setOrdenar} />

      <CardsContainer>
        {/* 
        //ternário para solução diferente com if
        {
          id === "" ? todosPokemons : pokemonFiltrado
        } */}

        {pokemons
          .filter((pokemon) => {
            // busca por id do pokémon
            // aqui, como filtra a partir de uma string e aceita o valor parcial, não tem problema em "filtrar" com o valor da busca vazio
            return pokemon.id.includes(id)
          })

          .filter((pokemon) => {
            // busca por nome do pokémon
            // aqui, como filtra a partir de uma string e aceita o valor parcial, não tem problema em "filtrar" com o valor da busca vazio
            // porém, no caso do nome, como o usuário pode digitar com maiúscula ou sem, é melhor garantir e usar o toLowerCase
            return pokemon.name.english.toLowerCase().includes(nome.toLowerCase())
          })

          .filter((pokemon) => {
            return tipo === "" ? pokemon : pokemon.type.includes(tipo)
          })

          .sort((pokemon1, pokemon2) => {
            if (ordenar === "Crescente") {
              return pokemon1.name.english > pokemon2.name.english ? 1 : -1
            } else if (ordenar === "Decrescente") {
              return pokemon1.name.english < pokemon2.name.english ? 1 : -1
            }
            else { return 0 }
          })

          .map((pokemon) => {
            return <PokemonCard
              cardColor={getColors(pokemon.type[0])}
              key={pokemon.id}
              pokemon={pokemon}
            />
          })}
      </CardsContainer>
    </>
  );
}

export default App;