import styled from "styled-components";
export const TituloPagina = styled.h1`
  margin: 0;
  padding: 0;
  border: 0;
  font-family: "poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.5vw;
  color: black;
  background-color: lightgray;
  margin-left: 2vw;
  margin-top: 2vh;
`;
export const DivMae = styled.div`
  height: 87vh;
  width:95vw;
  margin-left: 2rem;
  margin-top: 2vh;
  background-color: ${(props) => props.variant};
  border-radius: 2vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  .div-1 {
    grid-column: 1/2;
    grid-row: 1/3;
    display: grid;
    grid-template-rows: 1fr 1fr;
    margin: 3vh 0 0 2.3vw;
    .img1 {
      grid-row: 1/2;
      width: 18.1vw;
      height: 35vh;
      background-color: white;
    }
    .img2 {
      grid-row: 2/3;
      width: 18.1vw;
      height: 35vh;
      background-color: white;
    }
  }
  .div-2 {
    position: absolute;
    left: 24.5vw;
    margin-top: 3vh;
    border-radius: 1vw;
    grid-column: 2/3;
    grid-row: 1/3;
    width: 22vw;
    height: 80vh;
    background-color: white;
    .power1 {
      color: black;
      font-size: 1.5rem;
      margin-left: 2vw;
      margin-top: 2vh
    }
  }
  .div-3 {
    grid-column: 3/4;
    grid-row: 1/3;
    margin-left: 2vw;
    border-radius: 1vw;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card {
      margin-top: 2vh;
      color: white;
      font-size: 1.3vw;
      font-family: inter, Arial, Helvetica, sans-serif;
      img {
        width: 5.2vw;
        margin: 0.3vw;
      }
    }
    .tex {
      border-radius: 1.5vw;
      background-color: white;
      margin-top: 30vh;
      height: 50vh;
      width: 20vw;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.5rem;
         }
  }
  .div-4 {
    grid-column: 3/5;
    grid-row: 1/3;
    display: flex;
    flex-direction: column;
    .img1 {
      position: absolute;
      right: 6vw;
      /* width: 21vw;
      bottom: -265vh; */
    }
    .img2 {
      position: relative;
      width: 47.5vw;
    }
  }
`;
