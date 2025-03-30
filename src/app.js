import express from "express";
import cors from "cors";
import router from "./routes/router.js";
import conn from "./config/conn.js";
import Conta from "./models/Contas.js";
import Decoracao from "./models/Decoracoes.js";
import Insignia from "./models/Insignias.js";
import ContaDecoracao from "./models/ContaDecoracoes.js";
import ContaInsignia from "./models/ContaInsignias.js";
import TipoDecoracao from "./models/TiposDecoracoes.js";
import TipoInsignia from "./models/TiposInsignias.js";
import InsigniaTiposInsignia from "./models/InsigniasTiposInsignias.js";

const app = express();

const syncDB = async () => {
    try {
        await Conta.sync();
        await Decoracao.sync();
        await Insignia.sync();
        await ContaDecoracao.sync();
        await ContaInsignia.sync();
        await TipoDecoracao.sync();
        await TipoInsignia.sync();
        await InsigniaTiposInsignia.sync();

        console.log("[DB] Tabelas sincronizadas com sucesso!");
    } catch (error) {
        console.error("[DB] Erro ao sincronizar o banco de dados:", error);
    }
}

syncDB()

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router)

app.use((req, res) => {
    res.status(404).json({ message: "Rota não encontrada" })
});

export default app;