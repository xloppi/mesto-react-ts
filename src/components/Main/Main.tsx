import { Avatar, StyledMain, AvatarContainer, ChangeAvatarButton } from "./Main.styles";
import avatar from "../../images/avatar.jpg";

const Main = () => {
  return (
    <StyledMain>
      <section>
        <AvatarContainer>
          <Avatar src={avatar} alt="аватарка" />
          <ChangeAvatarButton></ChangeAvatarButton>
        </AvatarContainer>
      </section>
    </StyledMain>
  );
};

export default Main;
