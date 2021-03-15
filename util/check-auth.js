const jwt = require("jsonwebtoken");

const { SECRET_KEY } = require("../config.js");

module.exports = (context) => {
  const authHeader = context.req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, SECRET_KEY);
        return user;
      } catch (err) {}
    }
    
  }
};
