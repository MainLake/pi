import { Routes, Route, Link } from "react-router-dom";
import FormularioMascotasDueno from "./FormularioMacotasDueno";
import Login from "./Login";
import Home from "./Home";

const App = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Login'>Login</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-link" to='/post-mascota'>Formulario mascotas</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/post-mascota" element={<FormularioMascotasDueno/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </>
    );
}

export default App;