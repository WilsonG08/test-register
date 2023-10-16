// Importa el módulo necesario
import speakeasy from 'speakeasy';

// Middleware para requerir un token válido
export const requireToken = (req, res, next) => {
  const { token } = req.body;

  // Verificar el token utilizando la lógica adecuada
  // Aquí deberías tener una forma de determinar la identidad del usuario
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

  // El token es válido, permite continuar al siguiente middleware o controlador de ruta
  next();
};
