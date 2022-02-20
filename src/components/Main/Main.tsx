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

const Main = () => {
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
        <StyledAddPlaceButton></StyledAddPlaceButton>
      </ProfileContainer>
    </StyledMain>
  );
};

export default Main;
