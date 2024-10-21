import { useState } from "react";


const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            console.log(data);
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