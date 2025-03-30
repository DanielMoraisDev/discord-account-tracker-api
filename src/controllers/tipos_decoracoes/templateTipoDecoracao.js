import { Sequelize } from "sequelize";
import TipoDecoracaoModel from "../../models/TiposDecoracoes.js";

const templateTipoDecoracao = async (req, res) => {
    try {
        const tiposDecoracao = [
            {
                nome: "comum",
                valor: 10
            },
            {
                nome: "raro",
                valor: 20
            },
            {
                nome: "muito raro",
                valor: 30
            },
            {
                nome: "lendário",
                valor: 40
            }
        ]

        tiposDecoracao.map(async (e, i) => {
            await TipoDecoracaoModel.create(e)
            console.log({ message: `Tipo de decoração: ${e.nome}` })
        })

        return res.status(201).json({message: "Template de decoração adicionado com sucesso" })
    } catch (error) {
        console.log('[TIPO DECORAÇÃO TEMPLATE] Error: ' + error)
    }
}

export default templateTipoDecoracao;