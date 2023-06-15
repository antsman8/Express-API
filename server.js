const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const fileRoutes = require('./routes/file.routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/file', fileRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
