import { Sequelize } from "sequelize";
import ClassificacaoDecoracaoModel from "../../models/ClassificacaoDecoracoes.js";

const createClassificacaoDecoracao = async (req, res) => {
    try {
        const {nome, valor} = req.body

        if (!nome) {
            return res.status(400).json({ message: "O nome do tipo da classificacao é necessário" });
        }

        if (!valor) {
            return res.status(400).json({ message: "O valor do tipo da classificacao é necessário" });
        }

        const classificacaoDecoracao = {
            nome: nome,
            valor: valor
        }

        const classificacaoDecoracaoExist = await ClassificacaoDecoracaoModel.findOne({ where: { nome: classificacaoDecoracao.nome }});

        if (classificacaoDecoracaoExist) {
            return res.status(409).json({ error: "Essa classificacao de decoração já foi registrada!" })
        }

        const createClassificacaoDecoracao = await ClassificacaoDecoracaoModel.create(Decoracao)

        if (!createClassificacaoDecoracao) {
            return res.status(500).json({ error: "Esse tipo de decoração já foi registrada!" })
        }

        return res.status(201).json({createClassificacaoDecoracao, message: "Classificacao da decoração registrada com sucesso" })
    } catch (error) {
        console.error('[CONTROLLER CLASSIFICACAO DECORAÇÃO CREATE] Error: ' + error)
    }
}

export default createClassificacaoDecoracao;