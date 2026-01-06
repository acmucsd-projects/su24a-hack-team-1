import jwt from 'jsonwebtoken';

export function verifyToken(req) {
  const token = req.headers['authorization'] || req.headers.authorization;
  
  if (!token) {
    return { error: { status: 403, message: 'No token provided.' } };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return { userId: decoded.id };
  } catch (err) {
    return { error: { status: 500, message: 'Failed to authenticate token.' } };
  }
}

