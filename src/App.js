// import logo from './logo.svg';
import Home from './Pages/Home.js';
// import Login from './Pages/Login.js'
// import Signup from './Pages/Signup.js'
import Results from './Pages/Results.js';
import MyFooter from './Components/Footer.js';
// import Srch from './Components/idk.js';
// import 'bootstrap/dist/css/bootstrap.css';

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
                    <Route exact path='/Results'>
                        <Results />
                    </Route>
                    <Route path={["/", '*']}>
                        <Home />
                    </Route>
                </Switch>
                <MyFooter />
            </Router>

        </>
    );
}

export default App;
