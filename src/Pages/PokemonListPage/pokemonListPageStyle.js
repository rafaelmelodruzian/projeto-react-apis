import styled from "styled-components";

export const All = styled.body`
  background-color: #5d5d5d;
  margin: 0;
  padding: 0;
  border: 0;
`;

export const TituloPagina = styled.h1`
  font-family: "poppins", sans-serif;
  font-size: 3vw;
  color: white;
  background-color: #5d5d5d;
  margin: 0;
  padding: 0;
  .Title {
    margin-left: 1.2rem;
    
  }
  .ajuste{
color: transparent;
font-size: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #5d5d5d;
  flex-wrap: wrap;
  margin-top: 1.6rem;
  .loading {
    width: 100vw;
    height: 78vh;
  }
`;
