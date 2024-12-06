const express = require("express");
const router = express.Router();
const multer = require("multer");
const Skill = require("../models/Skill");
const Project = require("../models/Project");

// Configuración de multer para subir imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Carpeta donde se guardan las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// **RUTAS PARA SKILLS**
// Obtener todas las skills
router.get("/skills", async (req, res) => {
  try {
    const skills = await Skill.findAll();
    res.status(200).json(skills);
  } catch (error) {
    console.error("Error fetching skills:", error);
    res.status(500).json({ error: "Error fetching skills." });
  }
});

// Agregar una nueva skill con imagen
router.post("/skills", upload.single("icon"), async (req, res) => {
  try {
    const { name, description } = req.body;
    const icon_url = req.file ? `/uploads/${req.file.filename}` : null;

    const newSkill = await Skill.create({ name, description, icon_url });
    res.status(201).json(newSkill);
  } catch (error) {
    console.error("Error adding skill:", error);
    res.status(500).json({ error: "Error adding skill." });
  }
});

// Eliminar una skill
router.delete("/skills/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Skill.destroy({ where: { id } });
    res.status(200).json({ message: "Skill deleted successfully." });
  } catch (error) {
    console.error("Error deleting skill:", error);
    res.status(500).json({ error: "Error deleting skill." });
  }
});

// **RUTAS PARA PROJECTS**
// Obtener todos los proyectos
router.get("/projects", async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Error fetching projects." });
  }
});

// Agregar un nuevo proyecto con imagen
router.post("/projects", upload.single("image"), async (req, res) => {
  try {
    const { title, description, repo_url, live_url } = req.body;
    const image_url = req.file ? `/uploads/${req.file.filename}` : null;

    const newProject = await Project.create({
      title,
      description,
      repo_url,
      live_url,
      image_url,
    });

    res.status(201).json(newProject);
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).json({ error: "Error adding project." });
  }
});

// Eliminar un proyecto
router.delete("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Project.destroy({ where: { id } });
    res.status(200).json({ message: "Project deleted successfully." });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ error: "Error deleting project." });
  }
});

module.exports = router;
