CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio NUMERIC(10, 2) NOT NULL,
    stock INTEGER NOT NULL
);

-- Insumos iniciales de prueba
INSERT INTO productos (nombre, descripcion, precio, stock) VALUES ('Paracetamol 500mg', 'Analgésico', 1500, 100);
INSERT INTO productos (nombre, descripcion, precio, stock) VALUES ('Ibuprofeno 400mg', 'Antiinflamatorio', 2500, 50);