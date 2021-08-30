import { IMainModalButton } from "../../types";
import { Button } from "./styles";

export function ModalMainButton({ text }: IMainModalButton) {
   return (
      <Button>{text}</Button>
   )
}