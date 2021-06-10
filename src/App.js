import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Form from './Components/Form';
import Login from './Components/Login';
import ThankYouPage from './Components/ThankYouPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
   <Router>
     <Wrapper>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/ThankYou">
          <ThankYouPage/>
        </Route>
        <Route path='/'>
          <Form/>
        </Route>
      </Switch>
   </Wrapper>
   </Router>
  );
}

export default App;

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: whitesmoke`