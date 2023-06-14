import OkSvg from "../../../assets/Ok.svg";
import ClockSvg from "../../../assets/clock.svg";

export function getStatusIcon(status: string) {
  switch (status) {
    case "aguardando":
      return ClockSvg;
    case "pronto":
      return OkSvg;
    default:
      return OkSvg;
  }
}
