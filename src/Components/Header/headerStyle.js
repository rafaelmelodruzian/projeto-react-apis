import styled from "styled-components";

// Estilização Geral do componente
export const HeaderStyle = styled.header`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 26vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  .center__header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    .header__1 {
      margin-top: 5vh;
    }
    .header__3 {
      margin-top: 3vh;
      margin-left: 13vw;
    }
  }
`;

//Logo Pokemon
export const ImagemLogo = styled.img`
  width: 25vw;
  margin-left: 3vw;
margin-right: 5rem;
`;

// Botões
export const BtnMaisPokemons = styled.button`
  width: 25vw;
  font-family: "Poppins";
  font-style: normal;
  font-size: 1.5vw;
  text-decoration-line: underline;
  background-color: whitesmoke;
  border: none;
  cursor: pointer;
  background-color: transparent;
    .menor {
    height: 3vh;
  }
  margin-top: 1.3rem;
`;
export const BtnAdd = styled.button`
  width: 14rem;
  height: 3.5625rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  margin-right: 2rem;
  margin-top: 1.3rem;
  background: lightgray;
  color: #0f0f0f;
`;
export const BtnRemove = styled.button`
  width: 14rem;
  height: 3.5625rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  margin-right: 2rem;
  margin-top: 1.3rem;
  background: #ff6262;
  color: #ffffff;
`;
export const BtnPokedex = styled.button`
  width: 14rem;
  height: 3.5625rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  margin-right: 2rem;
  margin-top: 1.3rem;
  background: #33a4f5;
  color: #ffffff;
`;
