import styled from "styled-components";
import likeImg from "../../images/elements/like.svg";

export const StyledCard = styled.li`
  height: 361px;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
`

export const StyledCardImg = styled.img`
  display: block;
  width: 100%;
  height: 282px;
  object-fit: cover;
`

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 246px;
  margin: 0 auto;
  padding: 25px 0;
`

export const StyledCardTitle = styled.h3`
  font-weight: 900;
  font-size: 24px;
  color: #000000;
`

export const LikeButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: initial;
  border: 0;
  min-width: 20px;
  height: 18px;
  background-image: url(${likeImg});
  background-repeat: no-repeat;
  background-position: center;
  transition: opacity 0.3s;
  cursor: pointer;
`
