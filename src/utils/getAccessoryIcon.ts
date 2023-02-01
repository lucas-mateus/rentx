import SpeedSvg from "../assets/Speed.svg";
import GasolineSvg from "../assets/Gasolina.svg";
import AcelerateSvg from "../assets/Up.svg";
import ExchangeSvg from "../assets/Câmbio.svg";
import ForceSvg from "../assets/Força.svg";
import EnergySvg from "../assets/Energia.svg";
import PeopleSvg from "../assets/Pessoas.svg";
import CarSvg from "../assets/car-sport-sharp 1.svg";

export function getAccessoryIcon(type: string) {
  switch (type) {
    case "speed":
      return SpeedSvg;
    case "gasoline_motor":
      return GasolineSvg;
    case "acceleration":
      return AcelerateSvg;
    case "turning_diameter":
      return ForceSvg;
    case "exchange":
      return ExchangeSvg;
    case "electric_motor":
      return EnergySvg;
    case "seats":
      return PeopleSvg;
    default:
      return CarSvg;
  }
}
