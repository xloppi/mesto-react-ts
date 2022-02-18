import styled from "styled-components";
import Header from "./Header/Header";

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
        </Container>
      </AppWrapper>
  );
};

export default App;
