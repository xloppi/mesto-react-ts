import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Login from "./components/Login/Login";
import Main from "./components/Main";
import PopupAddPlace from "./components/PopupAddPlace";
import PopupEditProfile from "./components/PopupEditProfile/PopupEditProfile";
import Register from "./components/Register/Register";

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
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
          </Routes>
        </Container>
      </AppWrapper>
  );
};

export default App;
