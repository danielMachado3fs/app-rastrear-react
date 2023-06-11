import OkSvg from "../../../assets/Ok.svg";
import ClockSvg from "../../../assets/clock.svg";

export function getStatusIcon(status: string) {
  switch (status) {
    case "aguardando":
      return OkSvg;
    case "pronto":
      return ClockSvg;
    default:
      return OkSvg;
  }
}
