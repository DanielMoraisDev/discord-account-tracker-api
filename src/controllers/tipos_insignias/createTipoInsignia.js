import { Sequelize } from "sequelize";
import TipoInsigniaModel from "../../models/Tipos_Insignias.js";

const createTipoInsignia = async (req, res) => {
    try {
        const {nome, valor} = req.body

        if (!nome) {
            return res.status(400).json({ message: "O nome do tipo da insignia é necessário" });
        }

        if (!valor) {
            return res.status(400).json({ message: "O valor do tipo da insignia é necessário" });
        }

        const tipoInsignia = {
            nome: nome,
            valor: valor
        }

        const tipoInsigniaExist = await TipoInsigniaModel.findOne({ where: { nome: tipoInsignia.nome }});

        if (tipoInsigniaExist) {
            return res.status(409).json({ error: "Esse tipo de insignia já foi registrada!" })
        }

        const createTipoInsignia = await TipoInsigniaModel.create(insignia)

        if (!createTipoInsignia) {
            return res.status(500).json({ error: "Esse tipo de insignia já foi registrada!" })
        }

        return res.status(201).json({createTipoInsignia, message: "Tipo de insignia registrada com sucesso" })
    } catch (error) {
        console.log('[CONTROLLER TIPO INSIGNIA CREATE] Error: ' + error)
    }
}

export default createTipoInsignia;