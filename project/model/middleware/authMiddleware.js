const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Token de autenticação não fornecido." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (err) {
        res.status(401).json({ message: "Token inválido." });
    }
};