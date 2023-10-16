// Importa los módulos necesarios
import { users, User } from '../models/user.js';
import speakeasy from 'speakeasy';

// Función para el registro de usuarios
export const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  // Aquí puedes agregar la lógica de validación y guardado del usuario en la base de datos
  // Generar el secreto de autenticación con speakeasy, guardar los datos en la base de datos, etc.

  // Ejemplo de cómo podrías guardar un usuario en el arreglo 'users' (esto debería cambiar si usas una base de datos real)
  const secret = speakeasy.generateSecret({ length: 20 });
  const user = new User(users.length + 1, name, email, password, secret.base32);
  users.push(user);

  // Devolver una respuesta apropiada
  res.json({ message: 'User registered successfully' });
};

// Función para el inicio de sesión
export const loginUser = (req, res) => {
  const { email, password, token } = req.body;

  // Aquí puedes agregar la lógica de validación de inicio de sesión, verificar credenciales y token, etc.

  // Buscar al usuario por su dirección de correo electrónico
  const user = users.find(u => u.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const verified = speakeasy.totp.verify({
    secret: user.secret,
    encoding: 'base32',
    token,
    window: 1
  });

  if (!verified) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // El usuario está autenticado
  res.json({ message: 'Login successful' });
};
