// for not using try catch
const asyncHandler = require('express-async-handler');

const getAllUsers = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'get users',
  });
});

const createUser = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('bad request');
  }

  res.status(200).json({
    message: 'create user',
  });
});

const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `update user ${req.params.id}`,
  });
});

const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `delete user ${req.params.id}`,
  });
});

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
