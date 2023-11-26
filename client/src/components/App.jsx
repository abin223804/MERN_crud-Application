import LoginPage from "../pages/LoginPage";
import Notespage from "../pages/Notespage";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function App() {
    

    return (
        <div className="App">
<BrowserRouter>
<ul>
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/login">Login</Link>
    </li>
</ul>

<Routes>
    <Route index element={ <Notespage/>}  />
    <Route path="/login" element= { <LoginPage/>} />

</Routes>
</BrowserRouter>


           
        </div>
    );
}

export default App;
