import { Sequelize } from "sequelize";
import InsigniaModel from "../../models/Decoracoes.js";

const createInsignia = async (req, res) => {
    try {
        const {nome, valor, tipo_insignia_id} = req.body

        if (!nome) {
            return res.status(400).json({ message: "O nome da insignia é necessário" });
        }

        if (!valor) {
            return res.status(400).json({ message: "O valor da insignia é necessário" });
        }

        if (!tipo_insignia_id) {
            return res.status(400).json({ message: "O tipo da insignia é necessário" });
        }

        const insignia = {
            nome: nome,
            valor: valor,
            tipo_insignia_id: tipo_insignia_id
        }

        const InsigniaExist = await InsigniaModel.findOne({ where: { nome: insignia.nome }});

        if (InsigniaExist) {
            return res.status(409).json({ error: "Essa insignia já foi registrada!" })
        }

        const createInsignia = await InsigniaModel.create(Insignia)

        if (!createInsignia) {
            return res.status(500).json({ error: "Essa insignia já foi registrada!" })
        }

        return res.status(201).json({createInsignia, message: "Insignia registrada com sucesso" })
    } catch (error) {
        console.log('[CONTROLLER INSIGNIA CREATE] Error: ' + error)
    }
}

export default createInsignia;