const express = require('express');
const multer = require('multer');
const path = require('path');
const Skill = require('../models/Skill');

const router = express.Router();

// Configuración de multer para manejar las subidas de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nombre único para cada archivo
  },
});
const upload = multer({ storage });

// Ruta para agregar un skill con imagen
router.post('/skills', upload.single('icon'), async (req, res) => {
  const { name, description } = req.body;

  // Validar que los campos obligatorios no estén vacíos
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required.' });
  }

  const icon_url = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const skill = await Skill.create({ name, description, icon_url });
    res.status(201).json(skill);
  } catch (error) {
    console.error('Error adding skill:', error);
    res.status(500).json({ error: 'Error adding skill.' });
  }
});

// Ruta para obtener todos los skills
router.get('/skills', async (req, res) => {
  try {
    const skills = await Skill.findAll();
    res.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Error fetching skills' });
  }
});

module.exports = router;
