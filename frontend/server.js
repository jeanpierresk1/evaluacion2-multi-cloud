const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Servir la vista web (HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Conexión a la instancia SIMI-BD (Base de Datos) desde el servidor Web
const pool = new Pool({
    user: 'admin',
    host: '10.0.134.201', // Tu nueva IP privada de la instancia BD
    database: 'simi_db',
    password: 'admin',
    port: 5432,
});

// Endpoint GET: Consultar listado (Requerimiento 8)
app.get('/api/productos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM productos');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error conectando a la BD de SIMI");
    }
});

// Endpoint POST: Ingresar productos (Requerimiento 8)
app.post('/api/productos', async (req, res) => {
    const { nombre, descripcion, precio, stock } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO productos (nombre, descripcion, precio, stock) VALUES ($1, $2, $3, $4) RETURNING *',
            [nombre, descripcion, precio, stock]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error insertando producto");
    }
});

app.listen(80, () => {
    console.log('Frontend ERP corriendo en el puerto 80');
});
