const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database"); // Configuración de la base de datos
const Contact = require("./models/Contact"); // Modelo de la tabla Contact
require("dotenv").config(); // Para leer variables de entorno desde .env
const adminRoutes = require("./routes/admin");
const cors = require("cors");

const app = express();

//Agrega esta línea en tu server.js para servir los archivos de la carpeta uploads como archivos estáticos:
app.use("/uploads", express.static("uploads"));

app.use("/api/admin", adminRoutes);
// Probar la conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar el formulario de contacto
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Validar que los campos no estén vacíos
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  try {
    // Crear un nuevo registro en la base de datos
    const newContact = await Contact.create({ name, email, message });
    return res.status(200).json({
      message: "Your message has been sent successfully!",
      data: newContact,
    });
  } catch (error) {
    console.error("Error saving data:", error);
    return res
      .status(500)
      .json({ error: "Something went wrong. Please try again later." });
  }
});

// Sincronizar la base de datos y arrancar el servidor
(async () => {
  try {
    await sequelize.sync(); // Crea las tablas si no existen
    console.log("Database synced successfully.");

    // Sincroniza los modelos con las tablas de la base de datos
    await sequelize.sync({ alter: true });
    console.log("Database synced successfully.");

    app.listen(process.env.PORT || 5001, () => {
      console.log(`Server running on port ${process.env.PORT || 5001}`);
    });
  } catch (error) {
    console.error("Unable to start the server:", error);
  }
})();

const path = require("path");

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, "build")));

// Para manejar rutas del frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.use(cors());
