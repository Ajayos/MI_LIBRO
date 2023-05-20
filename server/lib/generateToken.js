


// Helper function to generate a JWT token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET)
  };

module.exports = generateToken;