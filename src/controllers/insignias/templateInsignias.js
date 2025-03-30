import { Sequelize } from "sequelize";
import insigniaModel from "../../models/Insignias.js";

const templateInsignia = async (req, res) => {
    try {
        const tiposInsignia = [
            {
                nome: "Quest Badge",
                classificacao_insignia_id: 1
            },
            {
                nome: "Bug Hunter",
                classificacao_insignia_id: 2
            },
            {
                nome: "Early Supporter",
                classificacao_insignia_id: 3
            },
            {
                nome: "Clown Badge",
                classificacao_insignia_id: 4
            },
        ]

        tiposInsignia.map(async (e, i) => {
            await insigniaModel.create(e)
            console.log({ message: `Insignia: ${e.nome}` })
        })

        if (res) {
            return res.json({message: "Template de insignia adicionado com sucesso" })
        }

        return console.log({message: "Template de insignia adicionado com sucesso" })
    } catch (error) {
        console.error('[INSIGNIA TEMPLATE] Error: ' + error)
    }
}

export default templateInsignia;