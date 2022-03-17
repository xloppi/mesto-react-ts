import {
  Avatar,
  StyledMain,
  AvatarContainer,
  ChangeAvatarButton,
  ProfileContainer,
  ProfileTitle,
  ProfileInfo,
  ProfileAbout,
  ProfileInfoContainer,
} from "./Main.styles";
import avatar from "../../images/avatar.jpg";
import EditProfileButton from "../UI/Button/EditProfileButton";
import { StyledAddPlaceButton } from "../UI/Button/Button.styles";
import List from "../List";
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch()

  const handleAddPlaceClick = () => {
    dispatch({type:'MODAL_SHOW', modalType: 'ADD_PLACE'})
  }

  return (
    <StyledMain>
      <ProfileContainer>
        <AvatarContainer>
          <Avatar src={avatar} alt="аватарка" />
          <ChangeAvatarButton></ChangeAvatarButton>
        </AvatarContainer>
        <ProfileInfoContainer>
          <ProfileInfo>
            <ProfileTitle>Жак-Ив Кусто</ProfileTitle>
            <EditProfileButton></EditProfileButton>
          </ProfileInfo>
          <ProfileAbout>Исследователь океана</ProfileAbout>
        </ProfileInfoContainer>
        <StyledAddPlaceButton onClick={handleAddPlaceClick}></StyledAddPlaceButton>
      </ProfileContainer>
      <List />
    </StyledMain>
  );
};

export default Main;
