// controllers/userController.js
const { User } = require('../models');
const bcrypt = require('bcrypt');

// Crear usuario
exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await User.create({ username, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Iniciar sesión
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Buscar al usuario por email
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Comparar la contraseña proporcionada con la almacenada
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

    
        res.status(200).json({ message: 'Inicio de sesión exitoso', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
