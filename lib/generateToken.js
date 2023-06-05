const jwt = require("jsonwebtoken");

const generateToken = (data) => {
  const payload = {
    id: data._id,
    email: data.email,
    hashedPassword: data.password,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1w", // 1 week expiration
  });

  return token;
};

module.exports = generateToken;
