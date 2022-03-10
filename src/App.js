import TextBlock from './TextBlock';
import Socials from './Socials';
import Footer from './Footer';
import Animation from './Animation';

import styled from 'styled-components';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #222;
  display: flex;
  justify-content: center;
`;

const CanvasBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px){
    height: 100vh;
    width: 90vw;
  }
  height: 100vh;
  width: 75vw;
  max-width: 750px;
  z-index: 1;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Background>
          <CanvasBox>
            <Animation></Animation>
          </CanvasBox>
          <Box>
            <TextBlock name="David Sohl"></TextBlock>
            <Socials>Test</Socials>
            <Footer></Footer>
          </Box>
        </Background>
      </header>
    </div>
  );
}

export default App;
