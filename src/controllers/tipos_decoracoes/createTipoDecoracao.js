import { Sequelize } from "sequelize";
import TipoDecoracaoModel from "../../models/TiposDecoracoes.js";

const createTipoDecoracao = async (req, res) => {
    try {
        const {nome, valor} = req.body

        if (!nome) {
            return res.status(400).json({ message: "O nome do tipo da decoração é necessário" });
        }

        if (!valor) {
            return res.status(400).json({ message: "O valor do tipo da decoração é necessário" });
        }

        const tipoDecoracao = {
            nome: nome,
            valor: valor
        }

        const tipoDecoracaoExist = await TipoDecoracaoModel.findOne({ where: { nome: tipoDecoracao.nome }});

        if (tipoDecoracaoExist) {
            return res.status(409).json({ error: "Esse tipo de decoração já foi registrada!" })
        }

        const createTipoDecoracao = await TipoDecoracaoModel.create(Decoracao)

        if (!createTipoDecoracao) {
            return res.status(500).json({ error: "Esse tipo de decoração já foi registrada!" })
        }

        return res.status(201).json({createTipoDecoracao, message: "Tipo de decoração registrada com sucesso" })
    } catch (error) {
        console.log('[CONTROLLER TIPO DECORAÇÃO CREATE] Error: ' + error)
    }
}

export default createTipoDecoracao;