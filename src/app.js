import express from "express";
import cors from "cors";
import router from "./routes/router.js";
import Conta from "./models/Contas.js";
import Decoracao from "./models/Decoracoes.js";
import Insignia from "./models/Insignias.js";
import Conta_Decoracao from "./models/Contas_Decoracoes.js";
import Conta_Insignia from "./models/Contas_Insignias.js";

const app = express();

// Conta.sync();
// Decoracao.sync();
// Insignia.sync();
// Conta_Decoracao.sync();
// Conta_Insignia.sync();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router)

app.use((req, res) => {
    res.status(404).json({ message: "Rota não encontrada" })
});

export default app;