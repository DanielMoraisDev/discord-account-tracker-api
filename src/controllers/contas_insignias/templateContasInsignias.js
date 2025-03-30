import { Sequelize } from "sequelize";
import ContaInsigniasModel from "../../models/ContaInsignias.js";

const templateInsignias = async (req, res) => {
    try {
        const contasInsignias = [
            {
                conta_id: "112233445566778899",
                insignia_id: 1
            },
            {
                conta_id: "554433221100998877",
                insignia_id: 2
            },
            {
                conta_id: "987654321098765432",
                insignia_id: 3
            },
        ]

        contasInsignias.map(async (e, i) => {
            await ContaInsigniasModel.create(e)
            console.log({ message: `Conta-insignias: ${e.conta_id}` })
        })

        if (res) {
            return res.json({message: "Template de conta-insignias adicionado com sucesso" })
        }

        return console.log({message: "Template de conta-insignias adicionado com sucesso" })
    } catch (error) {
        console.error('[CONTA-INSIGNIAS TEMPLATE] Error: ' + error)
    }
}

export default templateInsignias;