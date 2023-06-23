import styled from "styled-components";

const HeaderStyle = styled.header`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 22vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid orangered; */
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
const BtnPokedex = styled.button`
  width: 15vw;
  height: 11vh;
  background: #33a4f5;
  border-radius: 1vw;
  margin-right: 2vw;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 2vw;
  font-family: "Poppins", sans-serif;
`;
const ImagemLogo = styled.img`
  height: 16vh;
  width: 25vw;
  margin-right: 8vw;
`;
const BtnMaisPokemons = styled.button`
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
    height: 2vh;
  }
`;
const BtnAdd = styled.button`
  width: 15vw;
  height: 11vh;
  background: lightgray;
  border-radius: 1vw;
  margin-right: 2vw;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 1vw;
  font-family: "Poppins", sans-serif;
`;
const BtnRemove = styled.button`
  width: 15vw;
  height: 11vh;
  background: orangered;
  border-radius: 1vw;
  margin-right: 2vw;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 1vw;
  font-family: "Poppins", sans-serif;
`;
export {
  BtnPokedex,
  HeaderStyle,
  BtnMaisPokemons,
  ImagemLogo,
  BtnAdd,
  BtnRemove,
};
