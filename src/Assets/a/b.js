function sendType(e,id) {
  let typeByType = "";

  switch (e) {
    case "bug":
      typeByType = <img className="pokemon__type" src="https://imgur.com/uaUyB85.png"  alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    case "dark":
      typeByType = <img className="pokemon__type" src="https://imgur.com/5ACPbwO.png" alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    case "dragon":
      typeByType = <img className="pokemon__type" src="https://imgur.com/HConn3K.png" alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    case "electric":
      typeByType = <img className="pokemon__type" src="https://imgur.com/0MEFA9t.png"  alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    case "fairy":
      typeByType = <img className="pokemon__type" src="https://imgur.com/6cdWfdj.png"  alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    case "fighting":
      typeByType = <img className="pokemon__type" src="https://imgur.com/iRal7Pj.png"  alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    case "fire":
      typeByType = <img className="pokemon__type" src="https://imgur.com/Gsf82xj.png"  alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    case "flying":
      typeByType = <img className="pokemon__type" src="https://imgur.com/ZxJuEEh.png"  alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    case "ghost":
      typeByType = <img className="pokemon__type" src="https://imgur.com/Vzzdwjg.png" alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    case "grass":
      typeByType = <img className="pokemon__type" src="https://imgur.com/epAQjYs.png" alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    case "ground":
      typeByType = <img className="pokemon__type" src="https://imgur.com/MmdbTR0.png" alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    case "ice":
      typeByType = <img className="pokemon__type" src="https://imgur.com/Ehk1WX1.png" alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    case "normal":
      typeByType = <img className="pokemon__type" src="https://imgur.com/wydxodo.png" alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    case "poison":
      typeByType = <img className="pokemon__type" src="https://imgur.com/uuVCxkD.png" alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    case "psychic":
      typeByType = <img className="pokemon__type" src="https://imgur.com/a8ZBmoa.png" alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    case "rock":
      typeByType = <img className="pokemon__type" src="https://imgur.com/Mkkh7Ha.png" alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    case "steel":
      typeByType = <img className="pokemon__type" src="https://imgur.com/TX5ceG9.png" alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    case "water":
      typeByType = <img className="pokemon__type" src="https://imgur.com/NSZ7ZpA.png" alt={`Imagem representando o tipo: ${e}`}  key={id} />;
      break;
    default:
      typeByType = "black";
  }
  return typeByType;
}

export default sendType;
