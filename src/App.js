import './App.css';
import Navi from './layouts/Navi.jsx'
import Dashborard from './layouts/Dashborard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
 
function App() {
  return (
    <div className="App">
        <Navi/>
        <Container className="main">
          <Dashborard/>
        </Container>
    </div>
  );
}

export default App;
