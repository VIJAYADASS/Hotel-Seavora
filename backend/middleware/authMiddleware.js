import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // ❌ No header
    if (!authHeader) {
      return res.status(401).json({ msg: "No token provided" });
    }

    // ❌ Wrong format
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ msg: "Invalid token format" });
    }

    const token = authHeader.split(" ")[1];

    // 🔥 NEW CHECK (IMPORTANT)
    if (!token || token === "null" || token === "undefined") {
      return res.status(401).json({ msg: "Invalid token value" });
    }

    // 🔥 DEBUG (temporary)
    console.log("TOKEN:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    console.log("JWT ERROR:", err.message);
    return res.status(401).json({ msg: "Invalid token" });
  }
};

// ✅ ADMIN CHECK
export const isAdmin = (req, res, next) => {
  if (req.user?.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Admin only" });
  }
};

export default authMiddleware;