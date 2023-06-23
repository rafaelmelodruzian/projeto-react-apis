function sendColor(e) {
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
      colorByType = "#F6E652"
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
export default sendColor;
