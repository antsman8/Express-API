const fileService = require('../services/fileService');

exports.upload = (req, res) => {
    fileService
        .uploadFile(req)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
};
exports.getFileList = (req, res) => {
    fileService
        .getFileList(req.query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
};

exports.deleteFile = (req, res) => {
    fileService
        .deleteFile(req.params.id)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
};

exports.getFile = (req, res) => {
    fileService
        .getFile(req.params.id)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
};

exports.downloadFile = (req, res) => {
    fileService.downloadFile(req.params.id, res).catch((error) => {
        res.status(500).json({ error: error.message });
    });
};

exports.updateFile = (req, res) => {
    fileService
        .updateFile(req.params.id, req.body)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
};
