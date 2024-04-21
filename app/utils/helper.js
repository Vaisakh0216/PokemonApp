export const Showdif = (index) => {
  let backgroundImage;

  switch (index) {
    case 0:
      backgroundImage = "../categories/normal-type.png";
      break;
    case 1:
      backgroundImage = "../categories/fight.png";
      break;
    case 2:
      backgroundImage = "../categories/flying-type.png";
      break;
    case 3:
      backgroundImage = "../categories/poison-type.png";
      break;
    case 4:
      backgroundImage = "../categories/ground-type.png";
      break;
    case 5:
      backgroundImage = "../categories/rock-type.png";
      break;
    case 6:
      backgroundImage = "../categories/bug.png";
      break;
    case 7:
      backgroundImage = "../categories/gost-type.png";
      break;
    case 8:
      backgroundImage = "../categories/steel.png";
      break;
    case 9:
      backgroundImage = "../categories/fire.png";
      break;
    case 10:
      backgroundImage = "../categories/water.png";
      break;
    case 11:
      backgroundImage = "../categories/grass.png";
      break;
    case 12:
      backgroundImage = "../categories/electric.png";
      break;
    case 13:
      backgroundImage = "../categories/psychic.png";
      break;
    case 14:
      backgroundImage = "../categories/ice.png";
      break;
    case 15:
      backgroundImage = "../categories/dragon.png";
      break;
    case 16:
      backgroundImage = "../categories/dark.png";
      break;
    case 17:
      backgroundImage = "../categories/fairy.png";
      break;
    case 18:
      backgroundImage = "../categories/unknown.svg";
      break;
    case 19:
      backgroundImage = "../categories/shadow.svg";
      break;
    default:
      backgroundImage = "../categories/shadow.svg";
  }

  return backgroundImage;
};
