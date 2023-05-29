const jwt = require('jsonwebtoken');

const generateToken = (userId, email, hashedPassword) => {
  const payload = {
    id: userId,
    email: email,
    hashedPassword: hashedPassword,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1w', // 1 week expiration
  });

  return token;
};

module.exports = generateToken;
