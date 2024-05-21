import { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
        const [username, setUsername] = useState('pepe');
        const [password, setPassword] = useState('');

    

        function handleUsername(e) {
            setUsername(e.target.value);
        }

        function handlePassword(e) {
            setPassword(e.target.value);
        }

        function login() {
            if (username === 'nico' && password === '1234') {
                localStorage.setItem('user', JSON.stringify({ username, password }));
            }else{
                alert('Usuario o contraseña incorrectos');
            }
        }



        return (
            <>
                <div className="login-container">           
                <div className='home-btn'>
                    <Link to="/home" style={{ textDecoration: 'none' }}>Home</Link></div>    
                <form>
                    <h3>Login Here</h3>

                    <label>Username</label>
                    <input type="text" placeholder="nico" id="username" onChange={handleUsername}></input>

                    <label>Password</label>
                    <input type="password" placeholder="1234" id="password" onChange={handlePassword}></input>

                    <button onClick={login}>Log In</button>
                </form>
                </div>
            </>
        );
}
    export default Login;
   