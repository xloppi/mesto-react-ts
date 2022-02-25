import { CardInfo, StyledCard, StyledCardImg, StyledCardTitle } from "./Card.styles";
import CardImg from "../../images/kar.jpg"


const Card = () => {
  return (
    <StyledCard>
        <StyledCardImg src={CardImg} alt="картинка"></StyledCardImg>
        <CardInfo>
          <StyledCardTitle>Карачаевск</StyledCardTitle>
          <button>Лайк</button>
        </CardInfo>
    </StyledCard>
  )
}

export default Card;
