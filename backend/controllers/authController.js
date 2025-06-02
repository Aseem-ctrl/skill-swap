import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRES_IN } from '../config.js';

const createToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hash });

    const token = createToken(user._id);

    res.status(201).json({
      token,
      user: {
        _id: user._id,
        username: user.username,
      },
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const token = createToken(user._id);

  res.json({
    token,
    user: {
      _id: user._id,
      username: user.username,
    },
  });
};

export const logout = (req, res) => {
  res.json({ message: 'Logged out — delete token on client side' });
};

export const getMe = async (req, res) => {
  const user = await User.findById(req.userId).select('-password');
  res.json(user);
};
