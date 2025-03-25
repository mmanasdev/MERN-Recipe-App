import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { usersRouter } from './routers/users.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", usersRouter);

mongoose.connect(process.env.CONNECTION_STRING);

app.listen(3001, () => {
    console.log("Servidor ejecutándose en el puerto 3001");
  });
