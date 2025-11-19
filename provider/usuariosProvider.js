
// Validaciones y lógica de negocio

const usuariosService = require('../services/usuariosService');

const validateUserData = (userData) => {
  const errors = [];
  if (!userData.name) errors.push("El nombre es requerido");
  if (!userData.email) errors.push("El email es requerido");
  if (!userData.number) errors.push("El number es requerido");
  if (errors.length > 0) throw new Error(errors.join(", "));
};

exports.getAllUsers = () => usuariosService.findAllUsers();
exports.getUserById = (id) => usuariosService.findUserById(id);
exports.searchUsers = (query) => usuariosService.searchUsers(query);

exports.createUser = async (userData) => {
  validateUserData(userData);
  const existing = await usuariosService.findUserByEmail(userData.email);
  if (existing) throw new Error("El email ya está registrado");
  return usuariosService.createUser(userData);
};

exports.updateUser = async (id, data) => {
  validateUserData(data);
  return usuariosService.updateUser(id, data);
};

exports.deleteUser = (id) => usuariosService.deleteUser(id);
