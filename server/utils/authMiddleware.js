const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Verify user authentication using the token in the request headers
    const userToken = req.headers.authorization;
    const decodedToken = jwt.verify(userToken, process.env.JWT_TOKEN_SECRET);
    const userId = decodedToken.userId; // will extract the user ID from the token
    req.userId = userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authMiddleware;
