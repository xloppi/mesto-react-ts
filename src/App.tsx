import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: black;
  color: white;
`;

const Container = styled.div`
  width: 880px;
  max-width: 100%;
  margin: 0 auto;
`

const App = () => {
  return (
      <AppWrapper>
        <Container>
          <Header />
          <Main />
        </Container>
      </AppWrapper>
  );
};

export default App;
