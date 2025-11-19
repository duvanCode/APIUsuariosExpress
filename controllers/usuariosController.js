
const usuariosProvider = require('../provider/usuariosProvider');

exports.getUsers = async (req, res) => {
  try {
    const users = await usuariosProvider.getAllUsers();
    res.json({ success: true, data: users, count: users.length });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await usuariosProvider.getUserById(req.params.id);
    if (!user) return res.status(404).json({ success: false, error: "Usuario no encontrado" });
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.searchUsers = async (req, res) => {
  try {
    const users = await usuariosProvider.searchUsers(req.params.query);
    res.json({ success: true, data: users, count: users.length });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.addUser = async (req, res) => {
  try {
    const newUser = await usuariosProvider.createUser(req.body);
    res.status(201).json({ success: true, data: newUser, message: "Usuario creado exitosamente" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await usuariosProvider.updateUser(req.params.id, req.body);
    if (!updatedUser) return res.status(404).json({ success: false, error: "Usuario no encontrado" });
    res.json({ success: true, data: updatedUser, message: "Usuario actualizado" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await usuariosProvider.deleteUser(req.params.id);
    if (!deletedUser) return res.status(404).json({ success: false, error: "Usuario no encontrado" });
    res.json({ success: true, message: "Usuario eliminado", data: deletedUser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
