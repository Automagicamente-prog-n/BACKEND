import express, { json } from 'express';
import { config } from 'dotenv';
import userRoutes from './routes/userRoutes.js';

config();

const app = express();

// Middleware
app.use(json());

// Rutas
app.use('/api', userRoutes);


// Iniciar el servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
