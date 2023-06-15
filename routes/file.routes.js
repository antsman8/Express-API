const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const { authenticateToken } = require('../utils');

router.post('/upload', authenticateToken, fileController.upload);
router.get('/list', authenticateToken, fileController.getFileList);
router.delete('/delete/:id', authenticateToken, fileController.deleteFile);
router.get('/:id', authenticateToken, fileController.getFile);
router.get('/download/:id', authenticateToken, fileController.downloadFile);
router.put('/update/:id', authenticateToken, fileController.updateFile);

module.exports = router;
