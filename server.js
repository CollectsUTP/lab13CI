const express = require('express');
const app = express();

// Render inyecta una variable de entorno `PORT`. Usamos 3000 como fallback para desarrollo local.
const PORT = process.env.PORT || 3000;

// Middleware para habilitar el parseo de JSON
app.use(express.json());

// --- Rutas ---


// Ruta principal (GET)
app.get('/', (req, res) => {
  res.send('¡Servidor Express desplegado en Render! 🚀');
});

// Ruta de ejemplo con parámetro (GET)
app.get('/hola/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.json({ mensaje: `Hola, ${nombre}! 👋` });
});

// Ruta de ejemplo para recibir datos (POST)
app.post('/api/datos', (req, res) => {
    const data = req.body;
    console.log('Datos recibidos:', data);
    res.status(201).json({ 
        status: 'Datos recibidos con éxito', 
        tu_data: data 
    });
});

// --- Iniciar Servidor---
app.listen(PORT, () => {
  console.log(`Servidor Express ejecutándose en el puerto ${PORT}`);
});         