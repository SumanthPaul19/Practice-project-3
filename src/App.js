import './App.css';
import {BrowserRouter,Link,Switch,Route,Redirect} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'

function App() {
  return (
    <BrowserRouter>
    <div>   
      <ul className="nav bg-primary justify-content-center text-danger">
        <li className="nav-item">
         <Link className="nav-link text-dark" to="/home">Home</Link>
         </li>
         <li className="nav-item">
         <Link className="nav-link text-dark"  to="/home">Login</Link>
         </li>
         <li className="nav-item">
         <Link className="nav-link text-dark text-bold"  to="/home">Info</Link>
         </li>
         <li className="nav-item">
         <Link className="nav-link text-dark"  to="/Register">SignUp</Link>
         </li>
      </ul>
       
      

     
     <Switch>
       <Route path="/home">
        <Home/>
       </Route>

       <Route path="/register">
         <Register/>
       </Route>
       <Route path="/">
        <Redirect to="/home" />
       </Route>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
