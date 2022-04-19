import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Login from "./components/Login/Login";
import Main from "./components/Main";
import PopupAddPlace from "./components/PopupAddPlace";
import PopupEditProfile from "./components/PopupEditProfile/PopupEditProfile";
import Register from "./components/Register/Register";
import { useTypedSelector } from "./hooks/useTypedSelector";

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
  const { currentUser, loggedIn } = useTypedSelector(state => state.currentUser)

  return (
    <AppWrapper>
      <Container>
        <Header />
        {loggedIn ?
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="*"
              element={<Navigate to="/" />}
            />
          </Routes>
          :
          <Routes>
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route
              path="*"
              element={<Navigate to="/signin" replace/>}
            />
          </Routes>
        }
        <Footer />
      </Container>
    </AppWrapper>
  );
};

export default App;
