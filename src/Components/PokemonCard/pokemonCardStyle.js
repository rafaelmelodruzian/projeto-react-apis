import styled from "styled-components";

//CARD
export const PokemonCardStyle = styled.div`
  width: 26rem;
  height: 16.625rem;
  display: flex;
  position: relative;
  align-items: end;
  background-color: #5d5d5d;
  margin-right: 1vw;
  margin-left: 1vw;
  margin-bottom: 3rem;
`;

export const CardBox = styled.div`
  width: 26rem;
  height: 13.125rem;
  border-radius: 0.6vw;
  background-color: ${(props) => props.variant};
  display: flex;
  justify-content: space-between;
  .pokebola {
    width: 15rem;
    position: absolute;
    z-index: 0;
    margin-left: 11rem;
    margin-top: 1rem;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const BoxInfoType = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.1vw;
  color: white;
  .idPok {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    line-height: 2.4375rem;
    font-weight: 700;
    margin-bottom: -0.8rem;
  }
  .nomePok {
    font-size: 2rem;
    font-family: "Inter", sans-serif;
    text-transform: capitalize;
    line-height: 2.4375rem;
    font-weight: 700;
  }
  .img-types {
    img {
      height: 1.9375rem;
      width: 4.6rem;
      margin-right: 5px;
      margin-top: 5px;
    }
  }
`;

export const PokeImage = styled.img`
  position: absolute;
  top: -3vh;
  right: 0.2vw;
  width: 12.0625rem;
  height: 12.0625rem;
  z-index: 1;
`;

//BOTÕES
export const ButtonDetail = styled.button`
  width: 6vw;
  font-size: 1rem;
  font-family: "Poppins", serif;
  text-decoration-line: underline;
  background-color: transparent;
  border: none;
  color: #ffffff;
  line-height: 1.5rem;
  cursor: pointer;
  margin-left: 1vw;
  margin-top: -1rem;
`;

export const ButtonCatch = styled.button`
  position: absolute;
  font-family: "Poppins", serif;
  right: 1vw;
  font-size: 1vw;
  line-height: 1.5rem;
  bottom: 2.14vh;
  font-weight: 400;
  width: 9.125rem;
  height: 2.375rem;
  border: none;
  border-radius: 0.4vw;
  cursor: pointer;
  color: #0f0f0f;
  background: #ffffff;
  margin-bottom: 0.3rem;
`;

export const ButtonRemovee = styled.button`
  position: absolute;
  font-family: "Poppins", serif;
  right: 1vw;
  font-size: 1vw;
  line-height: 1.5rem;
  bottom: 2.14vh;
  font-weight: 400;
  width: 9.125rem;
  height: 2.375rem;
  border: none;
  border-radius: 0.4vw;
  cursor: pointer;
  color: #ffffff;
  background: #ff6262;
  margin-bottom: 0.3rem;
`;
