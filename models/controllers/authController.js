const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Usuário já existe." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.status(201).json({ token });
    } catch (err) {
        res.status(500).json({ message: "Erro ao registrar usuário." });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Usuário não encontrado." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Senha incorreta." });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: "Erro ao fazer login." });
    }
};
