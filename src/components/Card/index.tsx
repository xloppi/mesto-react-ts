import { CardInfo, LikeButton, StyledCard, StyledCardImg, StyledCardTitle } from "./Card.styles";
import CardImg from "../../images/kar.jpg"


const Card = () => {
  return (
    <StyledCard>
        <StyledCardImg src={CardImg} alt="картинка"></StyledCardImg>
        <CardInfo>
          <StyledCardTitle>Карачаевск</StyledCardTitle>
          <LikeButton />
        </CardInfo>
    </StyledCard>
  )
}

export default Card;
