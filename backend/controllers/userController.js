// for not using try catch
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
});

const createUser = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error('bad request');
  }

  const user = await User.create(req.body);

  res.status(200).json(user);
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error('User not found');
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedUser);
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error('User not found');
  }

  await user.remove();

  res.status(204).json(null);
});

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
