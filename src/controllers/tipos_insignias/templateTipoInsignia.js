import { Sequelize } from "sequelize";
import TipoInsigniaModel from "../../models/TiposInsignias.js";

const templateTipoInsignia = async (req, res) => {
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
            await TipoInsigniaModel.create(e)
            console.log({ message: `Tipo de insignação: ${e.nome}` })
        })

        return res.status(201).json({message: "Template de insignia adicionado com sucesso" })
    } catch (error) {
        console.log('[TIPO INSIGNIA TEMPLATE] Error: ' + error)
    }
}

export default templateTipoInsignia;