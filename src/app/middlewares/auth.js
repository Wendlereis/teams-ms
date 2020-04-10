import jwt from "jsonwebtoken";
import { promisify } from "util";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    req.userId = decoded.id;

    return next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
