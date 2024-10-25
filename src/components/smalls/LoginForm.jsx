import { useState, useContext } from "react";
import { GlobalContext } from '../../context/GlobalContext.jsx';



const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, setUser} = useContext(GlobalContext);

    console.log(user);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/sessions/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error de autenticación');
            }
            const data = await response.json();

            // Aca me tiene que mandar el token 
            //localStorage.setItem('token', data.token); // Ajusta esto según tu respuesta
            console.log(data);

            if (data === "pepe") setUser(""); // ESTO NO VA ES PARA QUE NO SALTE ERROR
            
            // Manejar la respuesta (almacenar usuario, redirigir, etc.)
        } catch (error) {
           
          console.log(error);
        }
    };



  return (
    <form onSubmit={handleLogin}>
    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Usuario" />
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
    <button type="submit">Iniciar sesión</button>
</form>
  )
}

export default LoginForm