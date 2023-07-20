import styled from "styled-components";

//Estilização Geral
export const TituloPagina = styled.h1`
  font-family: "poppins", sans-serif;
  font-size: 3vw;
  color: white;
  background-color: #5d5d5d;
  margin: 0;
  padding: 0;
  height: 20vh;
  .Title {
    padding: 1.875rem;
    position: static;
  }
  .ajuste {
    color: transparent;
    font-size: 1rem;
  }
`;
export const All = styled.body`
  background-color: #5d5d5d;
  margin: 0;
  height: 55rem;
`;

//Estilização por div´s
export const DivMae = styled.div`
  background-color: #5d5d5d;
  height: 41.4375rem;
  width: 95vw;
  margin: 3vh 1.5rem 0;
  background-color: ${(props) => props.variant};
  border-radius: 2vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);

  .div-1,
  .div-2,
  .div-3,
  .div-4 {
    display: flex;
    flex-direction: column;
  }
  .div-1 {
    grid-column: 1/2;
    grid-row: 1/3;
    margin-top: 1.1rem;
    margin-left: 1.2rem;
    height: 42rem;
    .img1,
    .img2 {
      width: 17.625rem;
      height: 17.625rem;
      background-color: #ffffff;
      margin-bottom: 60px;
      border-radius: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 20vh;
      }
    }
  }
  .div-2 {
    position: absolute;
    left: 25.5vw;
    margin-top: 3vh;
    border-radius: 1vw;
    grid-column: 2/3;
    grid-row: 1/3;
    width: 20.1875rem;
    height: 38.3125rem;
    background-color: white;
    .power1 {
      color: #000;
      font-family: Inter;
      font-size: 1.5rem;
      font-weight: 800;
      margin-left: 0.2rem;
      .status_base {
        margin-left: 2rem;
        font-size: 2rem;
      }
      .status_soma {
        margin-left: 3rem;
      }
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
      text-transform: capitalize;
      img {
        width: 5.2vw;
        margin: 0.3vw;
      }
      h1 {
        color: #ffffff;
        font-family: Inter;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 0.1rem;
      }
      .pokemon__type {
        width: 5rem;
        height: 1.9375rem;
      }
      .headerWrapper {
        margin-bottom: -1.5rem;
      }
    }
    .tex {
      border-radius: 1vw;
      background-color: white;
      margin-top: 31vh;
      width: 15.75rem;
      height: 26.5rem;
      position: absolute;
      flex-direction: column;
      align-items: flex-start;
      font-size: 1rem;
      z-index: 2;
      padding: 4px;
      display: flex;
      span {
        width: 7.125rem;
        height: 1rem;
        border: dashed #00000024 1px;
        border-radius: 0.75rem;
        background-color: #ececec;
        font-family: "Montserrat", sans-serif;
        font-size: 0.875rem;
        line-height: 1.0625rem;
        font-weight: 400;
        color: #000000;
        margin-bottom: 1rem;
        text-align: start;
        margin-left: 1rem;
        padding: 0.4375rem;
      }
    }
    .mooves_rend {
      display: flex;
      flex-direction: column;
    }
    .moov {
      color: #000;
      font-family: Inter;
      font-size: 2rem;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      margin-left: 1rem;
      margin-bottom: 1rem;
    }
  }

  .div-4 {
    grid-column: 3/5;
    grid-row: 1/3;
    display: flex;
    flex-direction: column;
    .img1 {
      position: absolute;
      right: 5vw;
      z-index: 1;
      width: 25vw;
      top: 30vh;
    }
    .img2 {
      position: relative;
      width: 44.5vw;
      margin-left: 3vw;
    }
  }
`;

// Estilização Barras de Status
export const ProgressBar = styled.div`
  width: 200px;
  height: 0.8rem;
  display: flex;

  &::before {
    border-radius: 0.4vw;
    content: "";
    width: calc(${(props) => props.stat} * 1%);
    background-color: hsl(calc(${(props) => props.stat} * 0.65), 75%, 55%);
  }
`;
export const Stats = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2%;
  width: 97%;
  margin-top: 3%;
  font-size: 1vw;
  border: 0.1vw dashed rgba(245, 222, 179, 0.5);
  padding: 3% 0;
  text-align: right;

  span:nth-child(1) {
    width: 50%;
    padding-right: 3%;
    font-size: 0.9vw;
  }
`;
