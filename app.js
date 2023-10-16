import express from 'express';
import authRoutes from './src/routers/authRoutes.js'; 
import protectedRoutes from './src/routers/protectedRoutes.js';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Monta las rutas de autenticación
app.use('/auth', authRoutes);

// Monta las rutas protegidas
app.use('/protected', protectedRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
