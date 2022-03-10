import { CopyRigth, StyledFooter } from "./Footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <CopyRigth>&copy; {new Date().getFullYear()} Mesto Russia</CopyRigth>
    </StyledFooter>
  )
}

export default Footer;
