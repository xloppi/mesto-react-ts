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
import List from "../List";
import AddPlaceButton from "../UI/Button/AddPlaceButton";

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
            <EditProfileButton />
          </ProfileInfo>
          <ProfileAbout>Исследователь океана</ProfileAbout>
        </ProfileInfoContainer>
        <AddPlaceButton />
      </ProfileContainer>
      <List />
    </StyledMain>
  );
};

export default Main;
