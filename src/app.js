import express from "express";
import cors from "cors";
import router from "./routes/router.js";
import Conta from "./models/Contas.js";
import Decoracao from "./models/Decoracoes.js";
import Insignia from "./models/Insignias.js";
import ContaDecoracao from "./models/ContaDecoracoes.js";
import ContaInsignia from "./models/ContaInsignias.js";
import ClassificacaoDecoracao from "./models/ClassificacaoDecoracoes.js";
import ClassificacaoInsignia from "./models/ClassificacaoInsignias.js";
import classificacaoInsigniasController from "./controllers/classificacao_insignias/classificacaoInsigniasController.js";
import classificacaoDecoracoesController from "./controllers/classificacao_decoracoes/classificacaoDecoracoesController.js";
import contasController from "./controllers/contas/contasController.js";
import decoracoesController from "./controllers/decoracoes/decoracoesController.js";
import insiginiasController from "./controllers/insignias/insigniasController.js";
import contaDecoracoesController from "./controllers/contas_decoracoes/contasDecoracoesController.js";
import contaInsigniasController from "./controllers/contas_insignias/contasInsigniasController.js";

const app = express();

const TEST = true

const syncDB = async () => {
    try {
        await Conta.sync();
        await ClassificacaoInsignia.sync();
        await ClassificacaoDecoracao.sync();
        await Insignia.sync();
        await Decoracao.sync();
        await ContaDecoracao.sync();
        await ContaInsignia.sync();

        console.log("[DB] Tabelas sincronizadas com sucesso!");
        if (TEST) {
            await templateData()
        }
    } catch (error) {
        console.error("[DB] Erro ao sincronizar o banco de dados:", error);
    }
}

syncDB()

const templateData = async () => {
    await classificacaoInsigniasController.template();
    await classificacaoDecoracoesController.template();
    await contasController.template();
    await decoracoesController.template();
    await insiginiasController.template();
    await contaDecoracoesController.template();
    await contaInsigniasController.template();
}

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router)

app.use((req, res) => {
    res.status(404).json({ message: "Rota não encontrada" })
});

export default app;