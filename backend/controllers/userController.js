const getAllUsers = (req, res) => {
  res.status(200).json({
    message: 'get users',
  });
};
const createUser = (req, res) => {
  res.status(200).json({
    message: 'create user',
  });
};
const updateUser = (req, res) => {
  res.status(200).json({
    message: `update user ${req.params.id}`,
  });
};
const deleteUser = (req, res) => {
  res.status(200).json({
    message: `delete user ${req.params.id}`,
  });
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
