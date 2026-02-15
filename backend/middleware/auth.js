const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {

  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({
      error: "No token provided"
    });
  }

  try {

    const token = authHeader.replace("Bearer ", "");

    const decoded = jwt.verify(token, "secret123"); // ✅ SAME SECRET

    req.user = {
      id: decoded.userId
    };

    next();

  } catch (err) {

    console.error(err);

    res.status(401).json({
      error: "Invalid token"
    });

  }

};
