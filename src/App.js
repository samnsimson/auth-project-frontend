import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { Login } from "./pages/Login";
import { Mfa } from "./pages/Mfa";
import { Register } from "./pages/Register";
import { Verify } from "./pages/Verify";
import { _404 } from "./pages/_404";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path={"/"} element={<Login />} />
                <Route exact path={"/home"} element={<HomePage />} />
                <Route exact path={"/register"} element={<Register />} />
                <Route exact path={"/verify/:id"} element={<Verify />} />
                <Route exact path={"/2fa-setup"} element={<Mfa />} />
                <Route exact path={"*"} element={<_404 />} />
            </Routes>
        </Router>
    );
}

export default App;
