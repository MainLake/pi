import { useState } from "react";

const Login = () => {

    const [credenciales, setCredenciales] = useState({
        email: '',
        password: ''
    });


    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(credenciales);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className='form-label'>Email</label>
                <input value={credenciales.email} onChange={evt => setCredenciales({...credenciales, email: evt.target.value})} className='form-control' type="email"/>
            </div>

            <div>
                <label className='form-label'>Password</label>
                <input value={credenciales.password} onChange={evt => setCredenciales({...credenciales, password: evt.target.value})} className='form-control' type="password"/>
            </div>

            <button className='btn btn-primary'>Iniciar sesion</button>
        </form>
    );
}

export default Login;