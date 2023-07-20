// URL´S
export const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

export const POKE_IMAGES = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

export const GIF_LOADING = "https://cdn.dribbble.com/users/722246/screenshots/2845858/pokemon_menu.gif"

export const POKE_BOLA2 = "https://imgur.com/WwJ5Tse.png"

export const POKE_BOLA1 = "https://imgur.com/eXtDn9x.png"
 
export const MENOR_CARC = "https://img2.gratispng.com/20180717/y/kisspng-less-than-sign-greater-than-sign-equals-sign-at-si-less-than-sign-5b4e28e01ec516.021790021531848928126.jpg"

export const LOGO_POKE = "https://imgur.com/5kW7J9D.jpg"


//Funçoes de tipos e cores pokemons
export function sendColor(e) {
    let colorByType = "";
    
    switch (e) {
      case "bug":
        colorByType = "#76A866"
        break;
      case "dark":
        colorByType = "#38152A"
        break;
      case "dragon":
        colorByType = "#1721BD"
        break;
      case "electric":
        colorByType = "#DED300"
        break;
      case "fairy":
        colorByType = "#DD0BE3"
        break;
      case "fighting":
        colorByType = "#B06B7F"
        break;
      case "fire":
        colorByType = "#EAAB7D"
        break;
      case "flying":
        colorByType = "#CC4B99"
        break;
      case "ghost":
        colorByType = "#76AFFA"
        break;
      case "grass":
        colorByType = "#729F92"
        break;
      case "ground":
        colorByType = "#C57341"
        break;
      case "ice":
        colorByType = "#15DBD7"
        break;
      case "normal":
        colorByType = "#BF9762"
        break;
      case "poison":
        colorByType = "#B451B5"
        break;
      case "psychic":
        colorByType = "#DED5E6"
        break;
      case "rock":
        colorByType = "#B8534B"
        break;
      case "steel":
        colorByType = "#C4C4C4"
        break;
      case "water":
        colorByType = "#71C3FF"
        break;
      default:
        colorByType = "black";
    }
    return colorByType;
  }
export function sendType(e,id) {
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


