import express from "express";

import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";

const server = express();
const PORT = 8080;
const HOST = "localhost";

server.use(express.json());

// Declaración de enrutadores

//server.use('/api/users', usersRouter);
//server.use('/api/pets', petsRouter);

// Método oyente de solicitudes
server.listen(PORT, () => {
  console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});
