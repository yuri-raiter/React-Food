import { IMainModalButton } from "../../types";
import { Button } from "./styles";

export function ModalMainButton({ text, handleCheckout }: IMainModalButton) {
   return (
      <Button onClick={handleCheckout}>{text}</Button>
   )
}