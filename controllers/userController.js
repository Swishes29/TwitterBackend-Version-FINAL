const bcrypt = require('bcrypt');
const { User } = require('../models');

const hashPassword = (password) => bcrypt.hash(password, 10);

const createUserObject = ({ username, email, password }) => ({
  username,
  email,
  password
});

exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await hashPassword(password);
    const newUser = createUserObject({ username, email, password: hashedPassword });
    
    const createdUser = await User.create(newUser);
    
    res.status(201).json(createdUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


const verifyPassword = (plainPassword, hashedPassword) => bcrypt.compare(plainPassword, hashedPassword);


exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

  
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

   
    const isMatch = await verifyPassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    res.status(200).json({ message: 'Inicio de sesión exitoso', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
