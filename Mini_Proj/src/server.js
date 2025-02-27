const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/create', (req, res) => {
  const { fileName } = req.body;
  fs.writeFile(fileName, '', (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error creating file' });
    }
    res.json({ message: `File '${fileName}' created successfully.` });
  });
});

app.post('/read', (req, res) => {
  const { fileName } = req.body;
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }
    res.json({ message: `File content: ${data}` });
  });
});

app.post('/write', (req, res) => {
  const { fileName, content } = req.body;
  fs.appendFile(fileName, content + '\n', (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error writing to file' });
    }
    res.json({ message: `Content written to '${fileName}'.` });
  });
});

app.post('/delete', (req, res) => {
  const { fileName } = req.body;
  fs.unlink(fileName, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting file' });
    }
    res.json({ message: `File '${fileName}' deleted successfully.` });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
