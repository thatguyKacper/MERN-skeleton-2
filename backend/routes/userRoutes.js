const express = require('express');
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} = require('../controllers/userController');
const { protect } = require('../controllers/authController');

const router = express.Router();

router.route('/').get(getAllUsers);

router.route('/signup').post(createUser);

router.route('/signin').post(loginUser);

router.route('/:id').patch(protect, updateUser).delete(protect, deleteUser);

module.exports = router;
