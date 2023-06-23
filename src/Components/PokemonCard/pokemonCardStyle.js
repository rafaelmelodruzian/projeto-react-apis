import styled from "styled-components";

export const PokemonCardStyle = styled.div`
  width: 30vw;
  height: 29vh;
  display: flex;
  position: relative;
  align-items: end;
`;
export const CardBox = styled.div`
  width: 30vw;
  height: 24vh;
  border-radius: 0.6vw;
  background-color: ${(props) => props.variant};
  display: flex;
  justify-content: space-between;
  .pokemon__type{
    height: 2rem;}

`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const BoxInfoType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6vh;
  margin-left: 1.1vw;
  color: white;
  .idPok.idPok {
    font-family: "Inter", sans-serif;
    font-size: 0.8vw;
  }
  .nomePok {
    font-size: 1.6vw;
    font-family: "Inter", sans-serif;
  }
  .img-types{
    img{
     width: 5rem;
     height: 1 rem;
      margin-right: 5px;
      margin-top: 5px;
    }
  }
`;
export const ButtonDetail = styled.button`
  width: 6vw;
  height: 5vh;
  font-size: 0.8vw;
  margin: 0 0 4, 2vh 1, 4vw;
  font-family: "Poppins", serif;
  font-style: normal;
  font-weight: 700;
  text-decoration-line: underline;
  background-color: transparent;
  border: none;
  color: #ffffff;
  overflow: hidden;
`;
export const PokeImage = styled.img`
  position: absolute;
  top: -2vh;
  right: 0.2vw;
  width: 10vw;
`;
export const ButtonCatch = styled.button`
  position: absolute;
  right: 1.71vw;
  bottom: 2.14vh;
  font-size: 1vw;
  width: 7vw;
  height: 3.5vh;
  border: none;
  background: #ffffff;
  border-radius: 0.4vw;
`;

export const ButtonRemovee = styled.button`
  position: absolute;
  right: 1.71vw;
  bottom: 2.14vh;
  font-size: 1vw;
  width: 7vw;
  height: 3.5vh;
  border: none;
  background: orangered;
  border-radius: 0.4vw;
`;
