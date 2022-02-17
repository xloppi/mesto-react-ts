import styled from "styled-components";
import Header from "./Header";

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: black;
  color: white;
`;

const AppContainer = styled.div`
  width: 880px;
  max-width: 100%;
  margin: 0 auto;
`

const App = () => {
  return (
      <AppWrapper>
        <AppContainer>
          <Header />
        </AppContainer>
      </AppWrapper>
  );
};

export default App;
