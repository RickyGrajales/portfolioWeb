const jwt = require('jsonwebtoken');

const verifyAdminToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.isAdmin) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    next();
  } catch (err) {
    console.error('Invalid token:', err);
    return res.status(403).json({ error: 'Invalid token' });
  }
};

module.exports = { verifyAdminToken };
