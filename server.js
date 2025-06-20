// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB conexión
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("🟢 Conectado a MongoDB"))
    .catch((err) => {
        console.error("🔴 Error conectando a MongoDB:", err.message);
        process.exit(1);
    });

// Modelo de puntuación
const scoreSchema = new mongoose.Schema({
    displayName: String,
    email: String,
    score: Number,
    createdAt: { type: Date, default: Date.now },
});

const Score = mongoose.model("Score", scoreSchema);

// Ruta: guardar puntuación
app.post("/api/quiz/score", async (req, res) => {
    const { displayName, email, score } = req.body;
    if (!displayName || !email || typeof score !== "number") {
    return res.status(400).json({ error: "Faltan datos requeridos" });
    }

    try {
        const newScore = new Score({ displayName, email, score });
        await newScore.save();
        res.status(201).json({ success: true, message: "Puntuación guardada" });
    } catch (err) {
        res.status(500).json({ error: "Error interno al guardar" });
    }
});

// Ruta: obtener puntuaciones por usuario
app.get("/api/quiz/scores", async (req, res) => {
    const { email } = req.query;
    if (!email) return res.status(400).json({ error: "Email requerido" });

    try {
        const scores = await Score.find({ email }).sort({ createdAt: -1 });
        res.json({ success: true, scores });
    } catch (err) {
        res.status(500).json({ error: "Error al obtener puntuaciones" });
    }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Backend activo en puerto ${PORT}`));
