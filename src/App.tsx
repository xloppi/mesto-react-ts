import styled from "styled-components";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import PopupAddPlace from "./components/PopupAddPlace";
import PopupWithForm from "./components/PopupWithForm/PopupWithForm";

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: black;
  color: white;
`;

const Container = styled.div`
  width: 880px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 0 60px;
`

const App = () => {
  return (
      <AppWrapper>
        <Container>
          <Header />
          <Main />
          <Footer />
          <PopupAddPlace />
        </Container>
      </AppWrapper>
  );
};

export default App;
