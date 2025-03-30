import { Sequelize } from "sequelize";
import ClassificacaoInsigniaModel from "../../models/ClassificacaoInsignias.js";

const createClassificacaoInsignia = async (req, res) => {
    try {
        const {nome, valor} = req.body

        if (!nome) {
            return res.status(400).json({ message: "O nome do Classificacao da insignia é necessário" });
        }

        if (!valor) {
            return res.status(400).json({ message: "O valor do Classificacao da insignia é necessário" });
        }

        const classificacaoInsignia = {
            nome: nome,
            valor: valor
        }

        const ClassificacaoInsigniaExist = await ClassificacaoInsigniaModel.findOne({ where: { nome: classificacaoInsignia.nome }});

        if (ClassificacaoInsigniaExist) {
            return res.status(409).json({ error: "Essa classificacao de insignia já foi registrada!" })
        }

        const createClassificacaoInsignia = await ClassificacaoInsigniaModel.create(classificacaoInsignia)

        if (!createClassificacaoInsignia) {
            return res.status(500).json({ error: "Essa classificacao de insignia já foi registrada!" })
        }

        return res.status(201).json({createClassificacaoInsignia, message: "Classificacao de insignia registrada com sucesso" })
    } catch (error) {
        console.error('[CONTROLLER CLASSIFICACAO INSIGNIA CREATE] Error: ' + error)
    }
}

export default createClassificacaoInsignia;