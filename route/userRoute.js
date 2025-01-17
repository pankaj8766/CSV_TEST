const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });
const userController = require('../controller/userController');

// Ensure the route and method names match
router.post('/importUser', upload.single('file'), userController.imoprtUser);

module.exports = router;
