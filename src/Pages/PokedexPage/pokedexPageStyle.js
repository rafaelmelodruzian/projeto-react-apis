import styled from "styled-components";

//Estilização pagina geral
export const TituloPagina = styled.h1`
  font-family: "poppins", sans-serif;
  font-size: 3vw;
  color: white;
  background-color: #5d5d5d;
  margin: 0;
  padding: 0;
  height: 8rem;
  .Title {
    margin-left: 1.2rem;
  }
  .ajuste {
    color: transparent;
    font-size: 1rem;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #5d5d5d;
  flex-wrap: wrap;
  min-height: 51.8vh; 
  .loading {
    width: 100vw;
    height: 78vh;
  }
`;
