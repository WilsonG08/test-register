// Importa el módulo necesario
import speakeasy from 'speakeasy';

// Función para acceder a recursos protegidos
export const accessProtectedResource = (req, res) => {
  const { token } = req.body;

  // Verificar el token utilizando la lógica adecuada
  // En este punto, deberías tener una forma de determinar la identidad del usuario
  // y, a continuación, verificar si el token es válido para ese usuario

  // Ejemplo de cómo podrías verificar el token utilizando speakeasy (esto puede variar según tu aplicación)
  const user = req.user; // Suponemos que tienes la información del usuario en req.user

  const verified = speakeasy.totp.verify({
    secret: user.secret,
    encoding: 'base32',
    token,
    window: 1
  });

  if (!verified) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // El usuario está autenticado y puede acceder al recurso protegido
  res.json({ message: 'Protected resource accessed successfully' });
};
