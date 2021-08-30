import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "./styles";
import { IQuantityButtons } from "../../types";

export function QuantityButtons({ id, quantity, dropQuantity, increaseQuantity }: IQuantityButtons) {
   return (
      <Container>
         <FontAwesomeIcon
            icon={faMinusCircle}
            className="icon"
            onClick={() => dropQuantity(quantity, id)}
         />
         <p>{quantity}</p>
         <FontAwesomeIcon
            icon={faPlusCircle}
            className="icon"
            onClick={() => increaseQuantity(id)}
         />
      </Container>
   )
}
