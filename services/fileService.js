const db = require('../db');

const fileService = {
    uploadFile: async (file) => {
        try {
            const { name, extension, mimeType, size, uploadDate } = file;
            const query =
                'INSERT INTO files (name, extension, mimeType, size, uploadDate) VALUES (?, ?, ?, ?, ?)';
            await db.query(query, [
                name,
                extension,
                mimeType,
                size,
                uploadDate,
            ]);
            return true;
        } catch (error) {
            console.error('Error Uploading file: ' + error);
            throw error;
        }
    },
    getFiles: async (listSize = 10, page = 1) => {
        try {
            const offset = (page - 1) * listSize;
            const query = 'SELECT FROM files LIMIT ? OFFSET ?';
            const files = await db.query(query, [listSize, offset]);
            return files;
        } catch (error) {
            console.error('Error getting files: ' + error);
            throw error;
        }
    },
    deleteFile: async (fileId) => {
        try {
            const query = 'DELETE FROM files WHERE id = ?';
            await db.query(query, [fileId]);
            return true;
        } catch (error) {
            console.error('Error deleting file: ' + error);
            throw error;
        }
    },
    getFile: async (fileId) => {
        try {
            const query = 'SELECT FROM files WHERE id = ?';
            const result = await db.query(query, [fieldId]);
            const file = result[0];
        } catch (error) {
            console.error('Error getting file:', error);
            throw error;
        }
    },
    updateFile: async (fieldId, updatedFile) => {
        try {
            const { name, extension, mimeType, size, uploadDate } = updatedFile;
            const query =
                'UPDATE files SET name = ?, extension = ?, mimeType = ?, size = ?, uploadDate = ? WHERE id = ?';
            db.query(query, [
                name,
                extension,
                mimeType,
                size,
                uploadDate,
                fileId,
            ]);
            return true;
        } catch (error) {
            console.error('Error updating file:', error);
            throw error;
        }
    },
};
module.exports = fileService;
