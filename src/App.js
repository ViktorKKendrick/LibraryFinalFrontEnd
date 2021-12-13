// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home.js';
// import Login from './Pages/Login.js'
// import Signup from './Pages/Signup.js'
import Results from './Pages/Results.js';
import MyFooter from './Components/Footer.js';
// import Srch from './Components/idk.js';
import 'bootstrap/dist/css/bootstrap.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
function App() {
    
    return (
        <>
            <Router>
                
                <Switch>
                    {/* <Route exact path='/SignUp'> */}
                        {/* <Signup/> */}
                    {/* </Route> */}
                    <Route exact path='/Results'>
                        <Results/>
                        {/* <Srch/> */}
                    </Route>
                    {/* <Route exact path='/Login'> */}
                        {/* <Login/> */}
                    {/* </Route> */}
                    {/* <Route exact path='/Dashboard'> */}
                        {/* <Dash/> */}
                    {/* </Route> */}
                    {/* <Route exact path='/cd'> */}
                        {/* <EasterEgg/> */}
                    {/* </Route> */}

                    <Route path={["/", '*']}>
                    {/* {localStorage.removeItem('Results')} */}
                        <Home />
                        {/* <Srch/> */}
                    </Route>
                </Switch>
                <MyFooter/>
            </Router>
            
        </>
    );
}

export default App;
