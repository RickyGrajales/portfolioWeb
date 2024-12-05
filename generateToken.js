const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { isAdmin: true }, // Información que quieres incluir en el token
  'your_super_secret_key', // La clave secreta definida en tu archivo .env (JWT_SECRET)
  { expiresIn: '1h' } // Duración del token
);

console.log('Generated token:', token);
