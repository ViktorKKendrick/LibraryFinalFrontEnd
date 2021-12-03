// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home.js'
import Login from './Pages/Login.js'
import Signup from './Pages/Signup.js'
import NavigationBar from './Components/NavigationBar'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
function App() {
    return (
        <>
            <Router>
                <NavigationBar />

                <Switch>
                    <Route exact path='/SignUp'>
                        <Signup/>
                    </Route>
                    <Route exact path='/Login'>
                        <Login/>
                    </Route>
                    <Route exact path='/Dashboard'>
                        {/* <Dash/> */}
                    </Route>
                    <Route exact path='/cd'>
                        {/* <EasterEgg/> */}
                    </Route>

                    <Route path={["/", '*']}>
                        <Home />
                    </Route>
                </Switch>

            </Router>
            {/* <Home/> */}
        </>
    );
}

export default App;
