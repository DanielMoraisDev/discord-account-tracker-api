import { Sequelize } from "sequelize";
import DecoracaoModel from "../../models/Decoracoes.js";

const createDecoracao = async (req, res) => {
    try {
        const {nome, valor, tipo_decoracao_id} = req.body

        if (!nome) {
            return res.status(400).json({ message: "O nome da decoração é necessário" });
        }

        if (!valor) {
            return res.status(400).json({ message: "O valor da decoração é necessário" });
        }

        if (!tipo_decoracao_id) {
            return res.status(400).json({ message: "O tipo da decoração é necessário" });
        }

        const decoracao = {
            nome: nome,
            valor: valor,
            tipo_decoracao_id: tipo_decoracao_id
        }

        const decoracaoExist = await DecoracaoModel.findOne({ where: { nome: decoracao.nome }});

        if (decoracaoExist) {
            return res.status(409).json({ error: "Essa decoracao já foi registrada!" })
        }

        const createDecoracao = await DecoracaoModel.create(decoracao)

        if (!createDecoracao) {
            return res.status(500).json({ error: "Essa decoração já foi registrada!" })
        }

        return res.status(201).json({createDecoracao, message: "Decoracao registrada com sucesso" })
    } catch (error) {
        console.error('[CONTROLLER DECORAÇÃO CREATE] Error: ' + error)
    }
}

export default createDecoracao;